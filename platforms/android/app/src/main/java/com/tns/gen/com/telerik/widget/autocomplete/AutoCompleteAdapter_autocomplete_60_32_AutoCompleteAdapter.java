package com.tns.gen.com.telerik.widget.autocomplete;

public class AutoCompleteAdapter_autocomplete_60_32_AutoCompleteAdapter extends com.telerik.widget.autocomplete.AutoCompleteAdapter implements com.tns.NativeScriptHashCodeProvider {
	public AutoCompleteAdapter_autocomplete_60_32_AutoCompleteAdapter(android.content.Context param_0, java.util.List param_1, java.lang.Integer param_2){
		super(param_0, param_1, param_2);
		com.tns.Runtime.initInstance(this);
	}

	public AutoCompleteAdapter_autocomplete_60_32_AutoCompleteAdapter(android.content.Context param_0, java.util.List param_1, com.telerik.widget.autocomplete.SuggestionItemViewHolder param_2){
		super(param_0, param_1, param_2);
		com.tns.Runtime.initInstance(this);
	}

	public com.telerik.widget.autocomplete.SuggestionItemViewHolder onCreateViewHolder(android.view.ViewGroup param_0, int param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		return (com.telerik.widget.autocomplete.SuggestionItemViewHolder)com.tns.Runtime.callJSMethod(this, "onCreateViewHolder", com.telerik.widget.autocomplete.SuggestionItemViewHolder.class, args);
	}

	public void onBindViewHolder(com.telerik.widget.autocomplete.SuggestionItemViewHolder param_0, int param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onBindViewHolder", void.class, args);
	}

	public void filter(java.lang.String param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "filter", void.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
