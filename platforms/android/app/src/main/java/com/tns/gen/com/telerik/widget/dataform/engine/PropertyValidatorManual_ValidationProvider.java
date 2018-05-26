package com.tns.gen.com.telerik.widget.dataform.engine;

public class PropertyValidatorManual_ValidationProvider implements com.telerik.widget.dataform.engine.PropertyValidatorManual.ValidationProvider {
	public PropertyValidatorManual_ValidationProvider() {
		com.tns.Runtime.initInstance(this);
	}

	public boolean validate(java.lang.Object param_0, java.lang.String param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		return (boolean)com.tns.Runtime.callJSMethod(this, "validate", boolean.class, args);
	}

}
