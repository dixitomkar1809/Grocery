package com.tns.gen.com.telerik.widget.dataform.visualization.editors;

public class DataFormCustomEditor_DataFormCustomEditorProvider implements com.telerik.widget.dataform.visualization.editors.DataFormCustomEditor.DataFormCustomEditorProvider {
	public DataFormCustomEditor_DataFormCustomEditorProvider() {
		com.tns.Runtime.initInstance(this);
	}

	public android.view.View createView(android.content.Context param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (android.view.View)com.tns.Runtime.callJSMethod(this, "createView", android.view.View.class, args);
	}

	public void applyValueToEditor(java.lang.Object param_0, android.view.View param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "applyValueToEditor", void.class, args);
	}

	public java.lang.Object getValue(android.view.View param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		return (java.lang.Object)com.tns.Runtime.callJSMethod(this, "getValue", java.lang.Object.class, args);
	}

}
