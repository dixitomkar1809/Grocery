package com.tns.gen.com.telerik.widget.autocomplete;

public class TokenDeselectedListener implements com.telerik.widget.autocomplete.TokenDeselectedListener {
	public TokenDeselectedListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onTokenDeselected(com.telerik.widget.autocomplete.RadAutoCompleteTextView param_0, com.telerik.widget.autocomplete.TokenModel param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onTokenDeselected", void.class, args);
	}

}
