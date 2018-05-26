package com.tns.gen.com.telerik.widget.dataform.engine;

public class PropertyConverter implements com.telerik.widget.dataform.engine.PropertyConverter {
	public PropertyConverter() {
		com.tns.Runtime.initInstance(this);
	}

	public java.lang.Object convertTo(java.lang.Object param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (java.lang.Object)com.tns.Runtime.callJSMethod(this, "convertTo", java.lang.Object.class, args);
	}

	public java.lang.Object convertFrom(java.lang.Object param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (java.lang.Object)com.tns.Runtime.callJSMethod(this, "convertFrom", java.lang.Object.class, args);
	}

}
