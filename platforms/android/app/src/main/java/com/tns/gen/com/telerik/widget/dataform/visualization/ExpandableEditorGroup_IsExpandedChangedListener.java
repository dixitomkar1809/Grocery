package com.tns.gen.com.telerik.widget.dataform.visualization;

public class ExpandableEditorGroup_IsExpandedChangedListener implements com.telerik.widget.dataform.visualization.ExpandableEditorGroup.IsExpandedChangedListener {
	public ExpandableEditorGroup_IsExpandedChangedListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onChanged(boolean param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onChanged", void.class, args);
	}

}
