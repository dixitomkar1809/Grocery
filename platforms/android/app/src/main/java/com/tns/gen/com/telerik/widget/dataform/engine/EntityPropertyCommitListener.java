package com.tns.gen.com.telerik.widget.dataform.engine;

public class EntityPropertyCommitListener implements com.telerik.widget.dataform.engine.EntityPropertyCommitListener {
	public EntityPropertyCommitListener() {
		com.tns.Runtime.initInstance(this);
	}

	public boolean onBeforeCommit(com.telerik.widget.dataform.engine.EntityProperty param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (boolean)com.tns.Runtime.callJSMethod(this, "onBeforeCommit", boolean.class, args);
	}

	public void onAfterCommit(com.telerik.widget.dataform.engine.EntityProperty param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onAfterCommit", void.class, args);
	}

}
