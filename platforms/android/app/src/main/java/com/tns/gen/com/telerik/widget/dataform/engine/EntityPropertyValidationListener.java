package com.tns.gen.com.telerik.widget.dataform.engine;

public class EntityPropertyValidationListener implements com.telerik.widget.dataform.engine.EntityPropertyValidationListener {
	public EntityPropertyValidationListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onValidate(com.telerik.widget.dataform.engine.EntityProperty param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onValidate", void.class, args);
	}

	public void onDidValidate(com.telerik.widget.dataform.engine.EntityProperty param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onDidValidate", void.class, args);
	}

}
