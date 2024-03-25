import { Auth0Provider } from '@auth0/auth0-react';
import Layout from '@/components/Layout/Layout';
import { Welcome } from '@/components/Welcome/Welcome';

export function HomePage() {
  return (
    <Auth0Provider
      domain="dev-dmxlbee48ic2ysu6.us.auth0.com"
      clientId="D1yoZ8EtBk7eVKiVytLbEXFxZoBn15BJ"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Layout>
        <Welcome />
      </Layout>
    </Auth0Provider>
  );
}
