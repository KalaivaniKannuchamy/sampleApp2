/**
 * All Context will be merged to child, to clear up app.
 */
import React, {useEffect, useState} from 'react';
import Config from 'react-native-config';
import {storage} from '@utils/constant';
import MobileOneProvider from '@context/index';

// eslint-disable-next-line react/prop-types
export function ContextLoader({config, children}) {
  // Load configuration from server
  const [loadEnvs, setLoadEnvs] = useState({});

  const {env} = useAppConfig();

  useEffect(() => {
    setTimeout(() => {
      setLoadEnvs({
        ...config.env,
        env,
      });
    }, 100);
    return () => {
      setLoadEnvs(true);
    };
  }, [env]);

  return loadEnvs ? (
    <>
      <StaticManager {...{config: {...config, env}}}>
        {/* Global Authentication Context Loader */}
        <AuthManager {...{config: {...config, env}}}>
          {/* Global MobileOne Provider */}
          <MoManager {...{config: {...config, env}}}>
            {/* Global Alphacomm Provider */}
            <PaymentManager {...{config: {...config, env}}}>
              {/* App MobileOne Context Provider */}
              <MobileOneProvider>{children}</MobileOneProvider>
            </PaymentManager>
          </MoManager>
        </AuthManager>
      </StaticManager>
    </>
  ) : (
    <>{children}</>
  );
}
// eslint-disable-next-line react/prop-types
export function ContextManager({children}) {
  // //console.log(process.env);
  const config = {
    env: {
      ...Config,
      REACT_APP_IS_CLIENT_LOGIN: Config.REACT_APP_IS_CLIENT_LOGIN === 'true',
      // REACT_APP_SERVER: Config.REACT_APP_SERVER_LOCAL_HOST,
      // ...clientAuth
    },
    storage: storage,
  };
  return (
    <>
      {/* TODO: Config it with proper props handling */}
      {/* Global App Context Loader */}
      <AppManager {...{config}}>
        <ContextLoader {...{config}}>{children}</ContextLoader>
      </AppManager>
    </>
  );
}

// ContextManager.propTypes = {
//   children: PropTypes.node.isRequired
// };

export default ContextManager;
