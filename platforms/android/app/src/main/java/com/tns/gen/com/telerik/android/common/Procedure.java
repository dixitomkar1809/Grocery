package com.tns.gen.com.telerik.android.common;

public class Procedure implements com.telerik.android.common.Procedure {
	public Procedure() {
		com.tns.Runtime.initInstance(this);
	}

	public void apply(java.lang.Object param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "apply", void.class, args);
	}

}
