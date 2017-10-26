//
//  RNAddPassButton.m
//  RNWalletModule
//
//  Created by Sean Wcisel on 10/25/17.
//  Copyright © 2017 SpartanNash Company. All rights reserved.
//

#import <PassKit/PassKit.h>
#import <React/RCTViewManager.h>

#import "RNAddPassButtonManager.h"

@implementation RNAddPassButtonManager
RCT_EXPORT_MODULE()

-(UIView *)view {
    PKAddPassButton *button = [PKAddPassButton new];
    return button;
}
@end
