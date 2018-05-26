package com.tns.gen.com.facebook.drawee.controller;

public class ControllerListener implements com.facebook.drawee.controller.ControllerListener {
	public ControllerListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onSubmit(java.lang.String param_0, java.lang.Object param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onSubmit", void.class, args);
	}

	public void onFinalImageSet(java.lang.String param_0, java.lang.Object param_1, android.graphics.drawable.Animatable param_2)  {
		java.lang.Object[] args = new java.lang.Object[3];
		args[0] = param_0;
		args[1] = param_1;
		args[2] = param_2;
		com.tns.Runtime.callJSMethod(this, "onFinalImageSet", void.class, args);
	}

	public void onIntermediateImageSet(java.lang.String param_0, java.lang.Object param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onIntermediateImageSet", void.class, args);
	}

	public void onIntermediateImageFailed(java.lang.String param_0, java.lang.Throwable param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onIntermediateImageFailed", void.class, args);
	}

	public void onFailure(java.lang.String param_0, java.lang.Throwable param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onFailure", void.class, args);
	}

	public void onRelease(java.lang.String param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "onRelease", void.class, args);
	}

}
