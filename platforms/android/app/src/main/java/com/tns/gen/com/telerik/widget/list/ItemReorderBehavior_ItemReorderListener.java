package com.tns.gen.com.telerik.widget.list;

public class ItemReorderBehavior_ItemReorderListener implements com.telerik.widget.list.ItemReorderBehavior.ItemReorderListener {
	public ItemReorderBehavior_ItemReorderListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onReorderStarted(int param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onReorderStarted", void.class, args);
	}

	public void onReorderItem(int param_0, int param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onReorderItem", void.class, args);
	}

	public void onReorderFinished()  {
		java.lang.Object[] args = null;
		com.tns.Runtime.callJSMethod(this, "onReorderFinished", void.class, args);
	}

}
