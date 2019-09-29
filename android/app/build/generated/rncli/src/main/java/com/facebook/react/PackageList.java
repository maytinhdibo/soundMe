
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

import com.soundmenative.BuildConfig;
import com.soundmenative.R;

// react-native-android-dialog-picker
import com.androiddialogpicker.RNAndroidDialogPickerPackage;
// react-native-picker-module
import com.taluttasgiran.pickermodule.ReactNativePickerModulePackage;
// react-native-gesture-handler
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
// react-native-navigation-bar-color
import com.thebylito.navigationbarcolor.NavigationBarColorPackage;
// react-native-reanimated
import com.swmansion.reanimated.ReanimatedPackage;
// react-native-svg
import com.horcrux.svg.SvgPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  public PackageList(ReactNativeHost reactNativeHost) {
    this.reactNativeHost = reactNativeHost;
  }

  public PackageList(Application application) {
    this.reactNativeHost = null;
    this.application = application;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new RNAndroidDialogPickerPackage(),
      new ReactNativePickerModulePackage(),
      new RNGestureHandlerPackage(),
      new NavigationBarColorPackage(),
      new ReanimatedPackage(),
      new SvgPackage()
    ));
  }
}