require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "react-native-wallet"
  s.version      = package['version']
  s.summary      = package['description']
  s.description  = "Adds apple wallet functionality to React Native"
  s.homepage     = "https://github.com/swcisel/react-native-wallet"
  s.license      = package['license']
  s.author             = { "Sean Wcisel" => "email@address.com" }
  s.source       = { :git => "https://github.com/swcisel/react-native-wallet.git", :tag => "#{s.version}" }
  s.source_files  = "ios/Classes", "ios/Classes/**/*.{h,m}"
  s.exclude_files = "ios/Classes/Exclude"
  s.dependency 'React'
end
