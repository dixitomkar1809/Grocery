
declare class SideDrawerFadeIn extends TKSideDrawerTransition {

	static alloc(): SideDrawerFadeIn; // inherited from NSObject

	static new(): SideDrawerFadeIn; // inherited from NSObject
}

declare class SideDrawerPush extends TKSideDrawerTransition {

	static alloc(): SideDrawerPush; // inherited from NSObject

	static new(): SideDrawerPush; // inherited from NSObject
}

declare class SideDrawerReveal extends TKSideDrawerTransition {

	static alloc(): SideDrawerReveal; // inherited from NSObject

	static new(): SideDrawerReveal; // inherited from NSObject
}

declare class SideDrawerReverseSlideOut extends SideDrawerReveal {

	static alloc(): SideDrawerReverseSlideOut; // inherited from NSObject

	static new(): SideDrawerReverseSlideOut; // inherited from NSObject
}

declare class SideDrawerScaleDownPusher extends TKSideDrawerTransition {

	static alloc(): SideDrawerScaleDownPusher; // inherited from NSObject

	static new(): SideDrawerScaleDownPusher; // inherited from NSObject

	scaleFactor: CGSize;
}

declare class SideDrawerScaleUp extends TKSideDrawerTransition {

	static alloc(): SideDrawerScaleUp; // inherited from NSObject

	static new(): SideDrawerScaleUp; // inherited from NSObject
}

declare class SideDrawerSlideAlong extends SideDrawerReveal {

	static alloc(): SideDrawerSlideAlong; // inherited from NSObject

	static new(): SideDrawerSlideAlong; // inherited from NSObject
}

declare class SideDrawerSlideInOnTop extends TKSideDrawerTransition {

	static alloc(): SideDrawerSlideInOnTop; // inherited from NSObject

	static new(): SideDrawerSlideInOnTop; // inherited from NSObject
}

declare class TKSideDrawer extends TKView {

	static alloc(): TKSideDrawer; // inherited from NSObject

	static appearance(): TKSideDrawer; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSideDrawer; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSideDrawer; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSideDrawer; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSideDrawer; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSideDrawer; // inherited from UIAppearance

	static findSideDrawerAtIndexForViewController(index: number, viewController: UIViewController): TKSideDrawer;

	static new(): TKSideDrawer; // inherited from NSObject

	allowEdgeSwipe: boolean;

	allowGestures: boolean;

	allowScroll: boolean;

	cancelTransition: boolean;

	content: UIView;

	delegate: TKSideDrawerDelegate;

	edgeSwipeTreshold: number;

	footerView: UIView;

	headerView: UIView;

	readonly hostview: UIView;

	readonly isVisible: boolean;

	position: TKSideDrawerPosition;

	readonly sections: NSArray<any>;

	readonly style: TKSideDrawerStyle;

	theme: TKTheme;

	title: string;

	transition: TKSideDrawerTransitionType;

	transitionDuration: number;

	transitionManager: TKSideDrawerTransition;

	width: number;

	addSection(section: TKSideDrawerSection): void;

	addSectionWithTitle(title: string): TKSideDrawerSection;

	addSectionWithTitleImage(title: string, image: UIImage): TKSideDrawerSection;

	dismiss(): void;

	insertSectionAtIndex(section: TKSideDrawerSection, index: number): void;

	removeAllSections(): void;

	removeSection(section: TKSideDrawerSection): void;

	selectItemAtIndexPath(indexPath: NSIndexPath): void;

	show(): void;

	showWithTransition(transition: TKSideDrawerTransitionType): void;
}

declare const enum TKSideDrawerBlurType {

	None = 0,

	Dynamic = 1,

	Static = 2
}

declare class TKSideDrawerController extends UIViewController {

	static alloc(): TKSideDrawerController; // inherited from NSObject

	static new(): TKSideDrawerController; // inherited from NSObject

	contentController: UIViewController;

	readonly defaultSideDrawer: TKSideDrawer;

	readonly sideDrawers: NSArray<any>;

	constructor(o: { content: UIViewController; });

	addSideDrawer(sideDrawer: TKSideDrawer): void;

	addSideDrawerAtPosition(position: TKSideDrawerPosition): TKSideDrawer;

	initWithContent(contentController: UIViewController): this;

	removeAllSideDrawers(): void;

	removeSideDrawer(sideDrawer: TKSideDrawer): void;
}

declare class TKSideDrawerDefaultTheme extends TKTheme {

	static alloc(): TKSideDrawerDefaultTheme; // inherited from NSObject

	static new(): TKSideDrawerDefaultTheme; // inherited from NSObject
}

interface TKSideDrawerDelegate extends NSObjectProtocol {

	didDismissSideDrawer?(sideDrawer: TKSideDrawer): void;

	didPanSideDrawer?(sideDrawer: TKSideDrawer): void;

	didShowSideDrawer?(sideDrawer: TKSideDrawer): void;

	sideDrawerCellForItemAtIndexPath?(sideDrawer: TKSideDrawer, indexPath: NSIndexPath): TKSideDrawerTableViewCell;

	sideDrawerDidSelectItemAtIndexPath?(sideDrawer: TKSideDrawer, indexPath: NSIndexPath): void;

	sideDrawerHeightForItemAtIndexPath?(sideDrawer: TKSideDrawer, indexPath: NSIndexPath): number;

	sideDrawerUpdateVisualsForItemAtIndexPath?(sideDrawer: TKSideDrawer, indexPath: NSIndexPath): void;

	sideDrawerUpdateVisualsForSection?(sideDrawer: TKSideDrawer, sectionIndex: number): void;

	sideDrawerViewForHeaderInSection?(sideDrawer: TKSideDrawer, sectionIndex: number): UIView;

	willDismissSideDrawer?(sideDrawer: TKSideDrawer): void;

	willShowSideDrawer?(sideDrawer: TKSideDrawer): void;
}
declare var TKSideDrawerDelegate: {

	prototype: TKSideDrawerDelegate;
};

declare class TKSideDrawerEdgePanRecognizer extends UIPanGestureRecognizer {

	static alloc(): TKSideDrawerEdgePanRecognizer; // inherited from NSObject

	static new(): TKSideDrawerEdgePanRecognizer; // inherited from NSObject

	treshold: number;

	constructor(o: { sideDrawer: TKSideDrawer; });

	initWithSideDrawer(sideDrawer: TKSideDrawer): this;
}

declare class TKSideDrawerHeader extends TKView {

	static alloc(): TKSideDrawerHeader; // inherited from NSObject

	static appearance(): TKSideDrawerHeader; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSideDrawerHeader; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSideDrawerHeader; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSideDrawerHeader; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSideDrawerHeader; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSideDrawerHeader; // inherited from UIAppearance

	static new(): TKSideDrawerHeader; // inherited from NSObject

	actionButton: UIButton;

	buttonPosition: TKSideDrawerHeaderButtonPosition;

	contentInsets: UIEdgeInsets;

	imagePosition: TKSideDrawerItemImagePosition;

	readonly imageView: UIImageView;

	readonly separator: UIView;

	separatorColor: TKFill;

	readonly stack: TKCoreStackLayout;

	readonly titleLabel: UILabel;

	constructor(o: { title: string; });

	constructor(o: { title: string; button: UIButton; });

	constructor(o: { title: string; button: UIButton; image: UIImage; });

	constructor(o: { title: string; image: UIImage; });

	initWithTitle(title: string): this;

	initWithTitleButton(title: string, button: UIButton): this;

	initWithTitleButtonImage(title: string, button: UIButton, image: UIImage): this;

	initWithTitleImage(title: string, image: UIImage): this;
}

declare const enum TKSideDrawerHeaderButtonPosition {

	Left = 0,

	Right = 1,

	Top = 2,

	Bottom = 3
}

declare class TKSideDrawerItem extends NSObject {

	static alloc(): TKSideDrawerItem; // inherited from NSObject

	static new(): TKSideDrawerItem; // inherited from NSObject

	contentAlignment: TKSideDrawerTableViewCellContentAlignment;

	image: UIImage;

	readonly style: TKSideDrawerItemStyle;

	title: string;

	constructor(o: { title: string; });

	constructor(o: { title: string; image: UIImage; });

	initWithTitle(title: string): this;

	initWithTitleImage(title: string, image: UIImage): this;
}

declare const enum TKSideDrawerItemImagePosition {

	Left = 0,

	Right = 1,

	Top = 2,

	Bottom = 3
}

declare class TKSideDrawerItemStyle extends TKStyleNode {

	static alloc(): TKSideDrawerItemStyle; // inherited from NSObject

	static new(): TKSideDrawerItemStyle; // inherited from NSObject

	contentInsets: UIEdgeInsets;

	fill: TKFill;

	font: UIFont;

	imagePosition: TKSideDrawerItemImagePosition;

	separatorColor: TKFill;

	stroke: TKStroke;

	textAlignment: NSTextAlignment;

	textColor: UIColor;
}

declare const enum TKSideDrawerPosition {

	Left = 0,

	Right = 1,

	Top = 2,

	Bottom = 3
}

declare class TKSideDrawerSection extends TKSideDrawerItem {

	static alloc(): TKSideDrawerSection; // inherited from NSObject

	static new(): TKSideDrawerSection; // inherited from NSObject

	readonly items: NSArray<any>;

	addItem(item: TKSideDrawerItem): void;

	addItemWithTitle(title: string): TKSideDrawerItem;

	addItemWithTitleImage(title: string, image: UIImage): TKSideDrawerItem;

	insertItemAtIndex(item: TKSideDrawerItem, index: number): void;

	removeAllItems(): void;

	removeItem(item: TKSideDrawerItem): void;
}

declare const enum TKSideDrawerShadowMode {

	None = 0,

	Hostview = 1,

	SideDrawer = 2
}

declare class TKSideDrawerStyle extends TKStyleNode {

	static alloc(): TKSideDrawerStyle; // inherited from NSObject

	static new(): TKSideDrawerStyle; // inherited from NSObject

	blurEffect: UIBlurEffectStyle;

	blurTintColor: UIColor;

	blurType: TKSideDrawerBlurType;

	dimOpacity: number;

	footerHeight: number;

	headerHeight: number;

	itemHeight: number;

	sectionHeaderHeight: number;

	shadowMode: TKSideDrawerShadowMode;

	shadowOffset: CGSize;

	shadowOpacity: number;

	shadowRadius: number;
}

declare class TKSideDrawerTableView extends UITableView implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): TKSideDrawerTableView; // inherited from NSObject

	static appearance(): TKSideDrawerTableView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSideDrawerTableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSideDrawerTableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSideDrawerTableView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSideDrawerTableView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSideDrawerTableView; // inherited from UIAppearance

	static new(): TKSideDrawerTableView; // inherited from NSObject

	sideDrawer: TKSideDrawer;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { sideDrawer: TKSideDrawer; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithSideDrawer(sideDrawer: TKSideDrawer): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class TKSideDrawerTableViewCell extends UITableViewCell {

	static alloc(): TKSideDrawerTableViewCell; // inherited from NSObject

	static appearance(): TKSideDrawerTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSideDrawerTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSideDrawerTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSideDrawerTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSideDrawerTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSideDrawerTableViewCell; // inherited from UIAppearance

	static new(): TKSideDrawerTableViewCell; // inherited from NSObject

	item: TKSideDrawerItem;

	separator: UIView;

	readonly stack: TKCoreStackLayout;

	update(): void;
}

declare const enum TKSideDrawerTableViewCellContentAlignment {

	Left = 0,

	Right = 1,

	Center = 2
}

declare class TKSideDrawerTransition extends NSObject {

	static alloc(): TKSideDrawerTransition; // inherited from NSObject

	static new(): TKSideDrawerTransition; // inherited from NSObject

	sideDrawer: TKSideDrawer;

	constructor(o: { sideDrawer: TKSideDrawer; });

	dismiss(): void;

	handleGesture(gestureRecognizer: UIGestureRecognizer): void;

	initWithSideDrawer(sideDrawer: TKSideDrawer): this;

	show(): void;

	transitionBegan(showing: boolean): void;

	transitionEnded(showing: boolean): void;
}

declare const enum TKSideDrawerTransitionType {

	SlideInOnTop = 0,

	Reveal = 1,

	Push = 2,

	SlideAlong = 3,

	ReverseSlideOut = 4,

	ScaleUp = 5,

	FadeIn = 6,

	ScaleDownPusher = 7,

	Custom = 8
}

declare class TKSideDrawerView extends UIView {

	static alloc(): TKSideDrawerView; // inherited from NSObject

	static appearance(): TKSideDrawerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TKSideDrawerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TKSideDrawerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TKSideDrawerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TKSideDrawerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TKSideDrawerView; // inherited from UIAppearance

	static new(): TKSideDrawerView; // inherited from NSObject

	readonly defaultSideDrawer: TKSideDrawer;

	mainView: UIView;

	readonly sideDrawers: NSArray<TKSideDrawer>;

	constructor(o: { frame: CGRect; mainView: UIView; });

	addSideDrawer(sideDrawer: TKSideDrawer): void;

	addSideDrawerAtPosition(position: TKSideDrawerPosition): TKSideDrawer;

	attachDrawerToWindow(): void;

	detachDrawerFromWindow(): void;

	initWithFrameMainView(frame: CGRect, mainView: UIView): this;

	removeAllSideDrawers(): void;

	removeSideDrawer(sideDrawer: TKSideDrawer): void;

	setMainView(mainView: UIView): void;
}

declare var TNSSideDrawerVersionNumber: number;

declare var TNSSideDrawerVersionString: interop.Reference<number>;
