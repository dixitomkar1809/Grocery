import { EventData } from "tns-core-modules/data/observable";
import { Property, View } from "tns-core-modules/ui/core/view";
import * as page from "tns-core-modules/ui/page";

/**
* This is the SideDrawer component. It separates your mobile app's screen
* into a main part and a menu part whereby the menu part is shown upon a swipe
* gesture using a transition effect.
*/
export class RadSideDrawer extends View {

    /**
     * Fired when the drawer is about to open.
     */
    static drawerOpeningEvent: string;

    /**
     * Fired after the drawer has been opened.
     */
    static drawerOpenedEvent: string;

    /**
     * Fired when the drawer is about to close.
     */
    static drawerClosingEvent: string;

    /**
     * Fired when the drawer has been closed.
     */
    static drawerClosedEvent: string;

    /**
     * Fired when the drawer is being opened by its edge gesture.
     */
    static drawerPanEvent: string;

    android: any;
    ios: any;

    /**
    * Gets or sets the main screen content for the current SideDrawer instance.
    * The value must be a valid {@link View} instance.
    */
    mainContent: View;

    /**
    * Gets or sets the menu screen content for the current SideDrawer instance.
    * The value must be a valid {@link View} instance.
    */
    drawerContent: View;

    /**
    * Gets or sets a number which defines either the width or the height
    * of the menu pane depending on the location of the SideDrawer. 
    * Top or Bottom - height, Right or Left - width. 
    */
    drawerContentSize: number;

    /**
    * Gets or sets the transition used to animate the process of showing or hiding
    * the menu pane. Depending on the transition set, the main content can also be part of
    * the animation. This property must be set to an object inheriting from
    * {@link DrawerTransitionBase}.
    */
    drawerTransition: DrawerTransitionBase;

    /**
    * Gets or sets the location of the menu pane. This property can be a value
    * defined by one of the variables exported by the {@link SideDrawerLocation} enumeration module.
    */
    drawerLocation: SideDrawerLocation;
        
    /**
     * Gets or sets a boolean value that determines if drawer can be opened or closed with gestures.
     */
    gesturesEnabled: boolean;

    /**
    * When called, closes the SideDrawer if it is open.
    */
    public closeDrawer(): void;

    /**
    * When called, opens the SideDrawer if it is closed.
    */
    public showDrawer(): void;

    /**
    * Toggles the current state of the SideDrawer instance.
    */
    public toggleDrawerState(): void;

    /**
     * Gets a value that indicates whether the drawer is open.
     */
    public getIsOpen(): boolean;

    /**
    * Identifies the {@link mainContent} dependency property.
    */
    public static mainContentProperty: Property<RadSideDrawer, View>;

    /**
    * Identifies the {@link drawerContent} dependency property.
    */
    public static drawerContentProperty: Property<RadSideDrawer, View>;

    /**
    * Identifies the {@link drawerContentSize} dependency property.
    */
    public static drawerContentSizeProperty: Property<RadSideDrawer, number>;

    /**
    * Identifies the {@link drawerTransition} dependency property.
    */
    public static drawerTransitionProperty: Property<RadSideDrawer, DrawerTransitionBase>;

    /**
    * Identifies the {@link drawerLocation} dependency property.
    */
    public static drawerLocationProperty: Property<RadSideDrawer, string>;
        
    /**
    * Identifies the {@link gesturesEnabled} dependency property.
    */
    public static gesturesEnabledProperty: Property<RadSideDrawer, boolean>;
}

/**
 * Generic scheme for event arguments provided to handlers of events exposed
 * by a {@link RadSideDrawer}.
 */
export class DrawerStateChangingEventArgs implements EventData {
    /**
   *Returns the name of the event that has been fired.
   */
    eventName: string;

    /**
    * The object that fires the event.
    */
    object: any;

    /**
    * Indicates whether the event should be canceled if possible.
    */
    returnValue: boolean;
}

/**
 * Generic scheme for event arguments provided to handlers of events exposed
 * by a {@link RadSideDrawer}.
 */
export class DrawerStateChangedEventArgs implements EventData {
/**
   *Returns the name of the event that has been fired.
   */
    eventName: string;

    /**
    * The object that fires the event.
    */
    object: any;
}

/**
* This module exports all possible SideDrawer locations as variables.
*/
export enum SideDrawerLocation {

    /**
    * If set, the menu pane of the SideDrawer is shown at the left side of
    * your application's screen.
    */
    Left,

    /**
    * If set, the menu pane of the SideDrawer is shown at the right side of
    * your application's screen.
    */
    Right,

    /**
    * If set, the menu pane of the SideDrawer is shown at the top of
    * your application's screen.
    */
    Top,

    /**
    * If set, the menu pane of the SideDrawer is shown at the bottom of
    * your application's screen.
    */
    Bottom
}

/**
* This serves as a base for all transition objects that can be used with a
* {@link SideDrawer} instance.
*/
export class DrawerTransitionBase {
    getNativeContent(): any;
}

/**
* Represents a Fade transition. When using this transition, the menu pane
* is faded in or out depending on whether it is shown or hidden.
*/
export class FadeTransition extends DrawerTransitionBase {
}

/**
* Represents a Push transition. When using this transition, the menu pane
* is animated in by pushing the main screen aside.
*/
export class PushTransition extends DrawerTransitionBase {
}

/**
* Represents a Push transition. When using this transition, the menu pane
* is shown as if it is under the main screen.
*/
export class RevealTransition extends DrawerTransitionBase {
}

/**
* Represents a ReverseSlideOut transition. When using this transition, the menu pane
* is animated by sliding it in the opposite direction the main screen is moved.
*/
export class ReverseSlideOutTransition extends DrawerTransitionBase {
}

/**
* Represents a ScaleDownPusher transition. When using this transition, the main screen
* is scaled by revealing the menu pane.
*/
export class ScaleDownPusherTransition extends DrawerTransitionBase {
}

/**
* Represents a ScaleUp transition. When using this transition, the menu pane
* is scaled by pushing the main screen aside.
*/
export class ScaleUpTransition extends DrawerTransitionBase {
}

/**
* Represents a SlideAlong transition. When using this transition, the menu pane
* and the main screen are moved along together.
*/
export class SlideAlongTransition extends DrawerTransitionBase {
}

/**
* Represents a SlideInOnTop transition. When using this transition, the menu pane
* is animated by sliding it on top of the main screen.
*/
export class SlideInOnTopTransition extends DrawerTransitionBase {
}