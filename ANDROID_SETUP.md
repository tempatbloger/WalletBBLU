# Android Development Setup Guide

## What's Already Done ✅

1. ✅ Java 17 installed via Homebrew
2. ✅ Android Studio installed
3. ✅ Environment variables configured in `.zshrc`

## Next Steps

### 1. Launch Android Studio and Complete Initial Setup

1. Open Android Studio from Applications or run:
   ```bash
   open -a "Android Studio"
   ```

2. On first launch, Android Studio will:
   - Download and install the Android SDK
   - Set up SDK components
   - Create the SDK directory at `~/Library/Android/sdk`

3. Follow the setup wizard:
   - Choose "Standard" installation
   - Accept license agreements
   - Wait for SDK download to complete

### 2. Install Required SDK Components

After Android Studio finishes initial setup, install the required components:

**Option A: Via Android Studio (Recommended)**
1. Open Android Studio
2. Go to **Tools → SDK Manager**
3. In the **SDK Platforms** tab, check:
   - ✅ Android 15.0 (API 35) - or latest available
4. In the **SDK Tools** tab, ensure these are checked:
   - ✅ Android SDK Build-Tools (version 35.0.0)
   - ✅ Android SDK Platform-Tools
   - ✅ Android SDK Command-line Tools
   - ✅ Android Emulator
   - ✅ Intel x86 Emulator Accelerator (HAXM installer) - if on Intel Mac
5. Click **Apply** and wait for installation

**Option B: Via Command Line (After SDK is installed)**
```bash
# Set environment variables (already in .zshrc)
export ANDROID_HOME="$HOME/Library/Android/sdk"
export PATH="$PATH:$ANDROID_HOME/cmdline-tools/latest/bin"

# Accept licenses
yes | sdkmanager --licenses

# Install required components
sdkmanager "platform-tools" "platforms;android-35" "build-tools;35.0.0" "emulator"
```

### 3. Create an Android Virtual Device (AVD)

1. In Android Studio, go to **Tools → AVD Manager**
2. Click **Create Virtual Device**
3. Choose a device (e.g., Pixel 5 or Pixel 6)
4. Select a system image:
   - **API Level 35** (Android 15.0) or **API Level 34** (Android 14.0)
   - Choose **x86_64** or **arm64-v8a** based on your Mac architecture
5. Click **Finish**

### 4. Verify Setup

Run React Native doctor to verify everything is set up:
```bash
npx react-native doctor
```

You should see:
- ✅ JDK - Version found: 17.x
- ✅ Android Studio - Required for building and installing your app on Android
- ✅ ANDROID_HOME - Environment variable that points to your Android SDK installation
- ✅ Android SDK - Version found: 35.0.0

### 5. Build and Run Android App

Once everything is set up:

```bash
# Start Metro bundler (in one terminal)
npm start

# In another terminal, build and run on Android
npx react-native run-android
```

Or if you have an emulator running:
```bash
npx react-native run-android
```

## Troubleshooting

### If `ANDROID_HOME` is not set:
```bash
# Add to ~/.zshrc (already done, but verify)
export ANDROID_HOME="$HOME/Library/Android/sdk"
export ANDROID_SDK_ROOT="$HOME/Library/Android/sdk"
export PATH="$PATH:$ANDROID_HOME/platform-tools"
```

### If Java version is wrong:
```bash
# Verify Java 17 is active
java -version  # Should show 17.x

# If not, ensure PATH includes Java 17
export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"
```

### If Gradle build fails:
- Ensure you have accepted all Android licenses:
  ```bash
  yes | sdkmanager --licenses
  ```

## Project Requirements

Based on `android/build.gradle`:
- **minSdkVersion**: 24
- **compileSdkVersion**: 35
- **targetSdkVersion**: 35
- **buildToolsVersion**: 35.0.0
- **Java Version**: 17

All of these are now configured! 🎉

