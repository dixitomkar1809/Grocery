package com.tns.gen.com.telerik.widget.autocomplete;

public class TokenRemovedListener implements com.telerik.widget.autocomplete.TokenRemovedListener {
	public TokenRemovedListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onTokenRemoved(com.telerik.widget.autocomplete.RadAutoCompleteTextView param_0, com.telerik.widget.autocomplete.TokenModel param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onTokenRemoved", void.class, args);
	}

}
