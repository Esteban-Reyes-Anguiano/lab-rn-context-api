import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

// UI KItten
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Divider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

// Components
import Header from './src/components/hedaer';
import Content from './src/components/content';
import Footer from './src/components/footer';
import {CartProvider} from './src/context/cartprovider';

export default () => (
  <CartProvider>
    <SafeAreaView style={styles.topArea} />
    <StatusBar barStyle="light-content" backgroundColor="rgb(21, 26, 48)" />
    <SafeAreaView style={styles.mainArea}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Layout style={styles.mainArea}>
          <Header />
          <Divider />
          <Content />
          <Divider />
          <Footer />
        </Layout>
      </ApplicationProvider>
    </SafeAreaView>
  </CartProvider>
);

const styles = StyleSheet.create({
  topArea: {flex: 0, backgroundColor: 'rgb(21, 26, 48)'},
  mainArea: {
    flex: 1,
    backgroundColor: 'rgb(21, 26, 48)',
  },

  card: {
    flex: 1,
  },
});