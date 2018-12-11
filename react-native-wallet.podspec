require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|

  # ―――  Spec Metadata  ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――― #
  #
  #  These will help people to find your library, and whilst it
  #  can feel like a chore to fill in it's definitely to your advantage. The
  #  summary should be tweet-length, and the description more in depth.
  #

  s.name         = "RNAppleWallet"
  s.version      = "1.0.2"
  s.summary      = "ReactNative module for Apple Wallet"

  # This description is used to generate tags and improve search results.
  #   * Think: What does it do? Why did you write it? What is the focus?
  #   * Try to keep it short, snappy and to the point.
  #   * Write the description between the DESC delimiters below.
  #   * Finally, don't worry about the indent, CocoaPods strips it!
  s.description  = "Adds apple wallet functionality to React Native"

  s.homepage     = "https://github.com/swcisel/react-native-wallet"
  s.license      = "MIT"
  s.author             = { "Sean Wcisel" => "email@address.com" }
  s.source       = { :git => "https://github.com/swcisel/react-native-wallet.git", :tag => "#{s.version}" }
  s.source_files  = "Classes", "Classes/**/*.{h,m}"
  s.exclude_files = "Classes/Exclude"
  s.dependency = 'React'
end
