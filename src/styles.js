const styles = {
  login:
  {
    dialog: {
      position: 'absolute',
      left: '0',
      right: '0',
      width: 'fit-content',
      height: 'fit-content',
      margin: 'auto',
      border: 'solid',
      padding: '1em',
      background: 'white',
      color: 'black',
      display: 'none',
    },
    dialog_open: {
      display: 'block',
    },
    dialog____backdrop: {
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      background: 'rgba(0,0,0,0.1)',
    },
    '@media screen and (max-width: 540px)': {
      __expression__: 'screen and (max-width: 540px)',
      dialog__polyfill_modal: {
        top: '0',
        width: 'auto',
        margin: '1em',
      },
    },
    dialog_overlay: {
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    },
    mdl_button: {
      background: 'transparent',
      border: 'none',
      borderRadius: '2px',
      color: 'rgb(0,0,0)',
      position: 'relative',
      height: '36px',
      margin: '0',
      minWidth: '64px',
      padding: '0 16px',
      display: 'inline-block',
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontSize: '14px',
      fontWeight: '500',
      textTransform: 'uppercase',
      lineHeight: '36px',
      letterSpacing: '0',
      overflow: 'hidden',
      willChange: 'box-shadow',
      transition: 'box-shadow .2s cubic-bezier(0.4, 0, 1, 1),background-color .2s cubic-bezier(0.4, 0, 0.2, 1),color .2s cubic-bezier(0.4, 0, 0.2, 1)',
      outline: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      textAlign: 'center',
      verticalAlign: 'middle',
    },
    mdl_button___moz_focus_inner: {
      border: '0',
    },
    mdl_button_hover: {
      backgroundColor: 'rgba(158,158,158, 0.20)',
    },
    mdl_button_focus_not__active: {
      backgroundColor: 'rgba(0,0,0, 0.12)',
    },
    mdl_button_active: {
      backgroundColor: 'rgba(158,158,158, 0.40)',
    },
    mdl_button_mdl_button__colored: {
      color: 'rgb(63,81,181)',
    },
    mdl_button_mdl_button__colored_focus_not__active: {
      backgroundColor: 'rgba(0,0,0, 0.12)',
    },
    input_mdl_button_type_submit: {
      WebkitAppearance: 'none',
    },
    mdl_button__raised: {
      background: 'rgba(158,158,158, 0.20)',
      boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
    },
    mdl_button__raised_active: {
      boxShadow: '0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)',
      backgroundColor: 'rgba(158,158,158, 0.40)',
    },
    mdl_button__raised_focus_not__active: {
      boxShadow: '0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)',
      backgroundColor: 'rgba(158,158,158, 0.40)',
    },
    mdl_button__raised_mdl_button__colored: {
      background: 'rgb(63,81,181)',
      color: 'rgb(255,255,255)',
    },
    mdl_button__raised_mdl_button__colored_hover: {
      backgroundColor: 'rgb(63,81,181)',
    },
    mdl_button__raised_mdl_button__colored_active: {
      backgroundColor: 'rgb(63,81,181)',
    },
    mdl_button__raised_mdl_button__colored_focus_not__active: {
      backgroundColor: 'rgb(63,81,181)',
    },
    mdl_button__raised_mdl_button__colored__mdl_ripple: {
      background: 'rgb(255,255,255)',
    },
    mdl_button__fab: {
      borderRadius: '50%',
      fontSize: '24px',
      height: '56px',
      margin: 'auto',
      minWidth: '56px',
      width: '56px',
      padding: '0',
      overflow: 'hidden',
      background: 'rgba(158,158,158, 0.20)',
      boxShadow: '0 1px 1.5px 0 rgba(0,0,0,.12),0 1px 1px 0 rgba(0,0,0,.24)',
      position: 'relative',
      lineHeight: 'normal',
    },
    mdl_button__fab__material_icons: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-12px, -12px)',
      lineHeight: '24px',
      width: '24px',
    },
    mdl_button__fab_mdl_button__mini_fab: {
      height: '40px',
      minWidth: '40px',
      width: '40px',
    },
    mdl_button__fab__mdl_button__ripple_container: {
      borderRadius: '50%',
      WebkitMaskImage: '-webkit-radial-gradient(circle, white, black)',
    },
    mdl_button__fab_active: {
      boxShadow: '0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)',
      backgroundColor: 'rgba(158,158,158, 0.40)',
    },
    mdl_button__fab_focus_not__active: {
      boxShadow: '0 0 8px rgba(0,0,0,.18),0 8px 16px rgba(0,0,0,.36)',
      backgroundColor: 'rgba(158,158,158, 0.40)',
    },
    mdl_button__fab_mdl_button__colored: {
      background: 'rgb(255,64,129)',
      color: 'rgb(255,255,255)',
    },
    mdl_button__fab_mdl_button__colored_hover: {
      backgroundColor: 'rgb(255,64,129)',
    },
    mdl_button__fab_mdl_button__colored_focus_not__active: {
      backgroundColor: 'rgb(255,64,129)',
    },
    mdl_button__fab_mdl_button__colored_active: {
      backgroundColor: 'rgb(255,64,129)',
    },
    mdl_button__fab_mdl_button__colored__mdl_ripple: {
      background: 'rgb(255,255,255)',
    },
    mdl_button__icon: {
      borderRadius: '50%',
      fontSize: '24px',
      height: '32px',
      marginLeft: '0',
      marginRight: '0',
      minWidth: '32px',
      width: '32px',
      padding: '0',
      overflow: 'hidden',
      color: 'inherit',
      lineHeight: 'normal',
    },
    mdl_button__icon__material_icons: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-12px, -12px)',
      lineHeight: '24px',
      width: '24px',
    },
    mdl_button__icon_mdl_button__mini_icon: {
      height: '24px',
      minWidth: '24px',
      width: '24px',
    },
    mdl_button__icon_mdl_button__mini_icon__material_icons: {
      top: '0px',
      left: '0px',
    },
    mdl_button__icon__mdl_button__ripple_container: {
      borderRadius: '50%',
      WebkitMaskImage: '-webkit-radial-gradient(circle, white, black)',
    },
    mdl_button__ripple_container: {
      display: 'block',
      height: '100%',
      left: '0px',
      position: 'absolute',
      top: '0px',
      width: '100%',
      zIndex: '0',
      overflow: 'hidden',
    },
    mdl_button_disabled___mdl_button__ripple_container__mdl_ripple: {
      backgroundColor: 'transparent',
    },
    mdl_button_mdl_button__disabled__mdl_button__ripple_container__mdl_ripple: {
      backgroundColor: 'transparent',
    },
    mdl_button__primary_mdl_button__primary: {
      color: 'rgb(63,81,181)',
    },
    mdl_button__primary_mdl_button__primary__mdl_ripple: {
      background: 'rgb(255,255,255)',
    },
    mdl_button__primary_mdl_button__primary_mdl_button__raised: {
      color: 'rgb(255,255,255)',
      backgroundColor: 'rgb(63,81,181)',
    },
    mdl_button__primary_mdl_button__primary_mdl_button__fab: {
      color: 'rgb(255,255,255)',
      backgroundColor: 'rgb(63,81,181)',
    },
    mdl_button__accent_mdl_button__accent: {
      color: 'rgb(255,64,129)',
    },
    mdl_button__accent_mdl_button__accent__mdl_ripple: {
      background: 'rgb(255,255,255)',
    },
    mdl_button__accent_mdl_button__accent_mdl_button__raised: {
      color: 'rgb(255,255,255)',
      backgroundColor: 'rgb(255,64,129)',
    },
    mdl_button__accent_mdl_button__accent_mdl_button__fab: {
      color: 'rgb(255,255,255)',
      backgroundColor: 'rgb(255,64,129)',
    },
    mdl_button_disabled__disabled: {
      color: 'rgba(0,0,0, 0.26)',
      cursor: 'default',
      backgroundColor: 'transparent',
    },
    mdl_button_mdl_button__disabled_mdl_button__disabled: {
      color: 'rgba(0,0,0, 0.26)',
      cursor: 'default',
      backgroundColor: 'transparent',
    },
    mdl_button__fab_disabled__disabled: {
      backgroundColor: 'rgba(0,0,0, 0.12)',
      color: 'rgba(0,0,0, 0.26)',
    },
    mdl_button__fab_mdl_button__disabled_mdl_button__disabled: {
      backgroundColor: 'rgba(0,0,0, 0.12)',
      color: 'rgba(0,0,0, 0.26)',
    },
    mdl_button__raised_disabled__disabled: {
      backgroundColor: 'rgba(0,0,0, 0.12)',
      color: 'rgba(0,0,0, 0.26)',
      boxShadow: 'none',
    },
    mdl_button__raised_mdl_button__disabled_mdl_button__disabled: {
      backgroundColor: 'rgba(0,0,0, 0.12)',
      color: 'rgba(0,0,0, 0.26)',
      boxShadow: 'none',
    },
    mdl_button__colored_disabled__disabled: {
      color: 'rgba(0,0,0, 0.26)',
    },
    mdl_button__colored_mdl_button__disabled_mdl_button__disabled: {
      color: 'rgba(0,0,0, 0.26)',
    },
    mdl_button__material_icons: {
      verticalAlign: 'middle',
    },
    mdl_card: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '16px',
      fontWeight: '400',
      minHeight: '200px',
      overflow: 'hidden',
      width: '330px',
      zIndex: '1',
      position: 'relative',
      background: 'rgb(255,255,255)',
      borderRadius: '2px',
      boxSizing: 'border-box',
    },
    mdl_card__media: {
      backgroundColor: 'rgb(255,64,129)',
      backgroundRepeat: 'repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
      backgroundOrigin: 'padding-box',
      backgroundAttachment: 'scroll',
      boxSizing: 'border-box',
    },
    mdl_card__title: {
      alignItems: 'center',
      color: 'rgb(0,0,0)',
      display: 'flex',
      justifyContent: 'stretch',
      lineHeight: 'normal',
      padding: '16px 16px',
      perspectiveOrigin: '165px 56px',
      transformOrigin: '165px 56px',
      boxSizing: 'border-box',
    },
    mdl_card__title_mdl_card__border: {
      borderBottom: '1px solid rgba(0,0,0,.1)',
    },
    mdl_card__title_text: {
      alignSelf: 'flex-end',
      color: 'inherit',
      display: 'flex',
      fontSize: '24px',
      fontWeight: '300',
      lineHeight: 'normal',
      overflow: 'hidden',
      transformOrigin: '149px 48px',
      margin: '0',
    },
    mdl_card__subtitle_text: {
      fontSize: '14px',
      color: 'rgba(0,0,0, 0.54)',
      margin: '0',
    },
    mdl_card__supporting_text: {
      color: 'rgba(0,0,0, 0.54)',
      fontSize: '1rem',
      lineHeight: '18px',
      overflow: 'hidden',
      padding: '16px 16px',
      width: '90%',
    },
    mdl_card__supporting_text_mdl_card__border: {
      borderBottom: '1px solid rgba(0,0,0,.1)',
    },
    mdl_card__actions: {
      fontSize: '16px',
      lineHeight: 'normal',
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0)',
      padding: '8px',
      boxSizing: 'border-box',
    },
    mdl_card__actions_mdl_card__border: {
      borderTop: '1px solid rgba(0,0,0,.1)',
    },
    mdl_card__expand: {
      flexGrow: '1',
    },
    mdl_card__menu: {
      position: 'absolute',
      right: '16px',
      top: '16px',
    },
    mdl_dialog: {
      border: 'none',
      boxShadow: '0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)',
      width: '280px',
    },
    mdl_dialog__title: {
      padding: '24px 24px 0',
      margin: '0',
      fontSize: '2.5rem',
    },
    mdl_dialog__actions: {
      marginRight: '8px',
      height: '36px',
    },
    mdl_dialog__actions___first_child: {
      marginRight: '0',
    },
    mdl_dialog__actions__full_width: {
      height: '48px',
      flex: '0 0 100%',
      paddingRight: '16px',
      marginRight: '0',
      textAlign: 'right',
    },
    mdl_dialog__content: {
      padding: '20px 24px 24px 24px',
      color: 'rgba(0,0,0, 0.54)',
    },
    mdl_progress: {
      display: 'block',
      position: 'relative',
      height: '4px',
      width: '500px',
      maxWidth: '100%',
    },
    mdl_progress__bar: {
      display: 'block',
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '0%',
      transition: 'width .2s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    mdl_progress__progressbar: {
      backgroundColor: 'rgb(63,81,181)',
      zIndex: '1',
      left: '0',
    },
    mdl_progress__bufferbar: {
      backgroundImage: 'linear-gradient(to right, rgba(255,255,255, 0.7), rgba(255,255,255, 0.7)),linear-gradient(to right, rgb(63,81,181), rgb(63,81,181))',
      zIndex: '0',
      left: '0',
    },
    mdl_progress__auxbar: {
      right: '0',
    },
    mdl_progress_not__mdl_progress__indeterminate___auxbar: {
      backgroundImage: 'linear-gradient(to right, rgba(255,255,255, 0.9), rgba(255,255,255, 0.9)),linear-gradient(to right, rgb(63,81,181), rgb(63,81,181))',
    },
    mdl_progress_mdl_progress__indeterminate__bar1: {
      backgroundColor: 'rgb(63,81,181)',
      animationName: 'indeterminate1',
      animationDuration: '2s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
    },
    mdl_progress_mdl_progress__indeterminate__bar3: {
      backgroundImage: 'none',
      backgroundColor: 'rgb(63,81,181)',
      animationName: 'indeterminate2',
      animationDuration: '2s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
    },
    mdl_shadow__2dp: {
      boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
    },
    mdl_shadow__3dp: {
      boxShadow: '0 3px 4px 0 rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.2),0 1px 8px 0 rgba(0,0,0,.12)',
    },
    mdl_shadow__4dp: {
      boxShadow: '0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)',
    },
    mdl_shadow__6dp: {
      boxShadow: '0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.2)',
    },
    mdl_shadow__8dp: {
      boxShadow: '0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)',
    },
    mdl_shadow__16dp: {
      boxShadow: '0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2)',
    },
    mdl_shadow__24dp: {
      boxShadow: '0 9px 46px 8px rgba(0,0,0,.14),0 11px 15px -7px rgba(0,0,0,.12),0 24px 38px 3px rgba(0,0,0,.2)',
    },
    mdl_spinner: {
      display: 'inline-block',
      position: 'relative',
      width: '28px',
      height: '28px',
    },
    mdl_spinner_not__is_upgraded__is_active_after: {
      content: '"Loading..."',
    },
    mdl_spinner_is_upgraded_is_active: {
      animation: 'mdl-spinner__container-rotate 1568.2352941176ms linear infinite',
    },
    mdl_spinner__layer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      opacity: '0',
    },
    mdl_spinner__layer_1: {
      borderColor: 'rgb(66,165,245)',
    },
    mdl_spinner__single_color__mdl_spinner__layer_1: {
      borderColor: 'rgb(63,81,181)',
    },
    mdl_spinner_is_active__mdl_spinner__layer_1: {
      animation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
    },
    mdl_spinner__layer_2: {
      borderColor: 'rgb(244,67,54)',
    },
    mdl_spinner__single_color__mdl_spinner__layer_2: {
      borderColor: 'rgb(63,81,181)',
    },
    mdl_spinner_is_active__mdl_spinner__layer_2: {
      animation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
    },
    mdl_spinner__layer_3: {
      borderColor: 'rgb(253,216,53)',
    },
    mdl_spinner__single_color__mdl_spinner__layer_3: {
      borderColor: 'rgb(63,81,181)',
    },
    mdl_spinner_is_active__mdl_spinner__layer_3: {
      animation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
    },
    mdl_spinner__layer_4: {
      borderColor: 'rgb(76,175,80)',
    },
    mdl_spinner__single_color__mdl_spinner__layer_4: {
      borderColor: 'rgb(63,81,181)',
    },
    mdl_spinner_is_active__mdl_spinner__layer_4: {
      animation: 'mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
    },
    mdl_spinner__gap_patch: {
      position: 'absolute',
      boxSizing: 'border-box',
      top: '0',
      left: '45%',
      width: '10%',
      height: '100%',
      overflow: 'hidden',
      borderColor: 'inherit',
    },
    mdl_spinner__gap_patch__mdl_spinner__circle: {
      width: '1000%',
      left: '-450%',
    },
    mdl_spinner__circle_clipper: {
      display: 'inline-block',
      position: 'relative',
      width: '50%',
      height: '100%',
      overflow: 'hidden',
      borderColor: 'inherit',
    },
    mdl_spinner__circle_clipper_mdl_spinner__left: {
      float: 'left',
    },
    mdl_spinner__circle_clipper_mdl_spinner__right: {
      float: 'right',
    },
    mdl_spinner__circle_clipper__mdl_spinner__circle: {
      width: '200%',
    },
    mdl_spinner__circle: {
      boxSizing: 'border-box',
      height: '100%',
      borderWidth: '3px',
      borderStyle: 'solid',
      borderColor: 'inherit',
      borderBottomColor: 'transparent !important',
      borderRadius: '50%',
      animation: 'none',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
    },
    mdl_spinner__left__mdl_spinner__circle: {
      borderRightColor: 'transparent !important',
      transform: 'rotate(129deg)',
    },
    mdl_spinner_is_active__mdl_spinner__left__mdl_spinner__circle: {
      animation: 'mdl-spinner__left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
    },
    mdl_spinner__right__mdl_spinner__circle: {
      left: '-100%',
      borderLeftColor: 'transparent !important',
      transform: 'rotate(-129deg)',
    },
    mdl_spinner_is_active__mdl_spinner__right__mdl_spinner__circle: {
      animation: 'mdl-spinner__right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
    },
    mdl_textfield: {
      position: 'relative',
      fontSize: '16px',
      display: 'inline-block',
      boxSizing: 'border-box',
      width: '300px',
      maxWidth: '100%',
      margin: '0',
      padding: '20px 0',
    },
    mdl_textfield__mdl_button: {
      position: 'absolute',
      bottom: '20px',
    },
    mdl_textfield__align_right: {
      textAlign: 'right',
    },
    mdl_textfield__full_width: {
      width: '100%',
    },
    mdl_textfield__expandable: {
      minWidth: '32px',
      width: 'auto',
      minHeight: '32px',
    },
    mdl_textfield__expandable__mdl_button__icon: {
      top: '16px',
    },
    mdl_textfield__input: {
      border: 'none',
      borderBottom: '1px solid rgba(0,0,0, 0.12)',
      display: 'block',
      fontSize: '16px',
      fontFamily: '"Helvetica","Arial",sans-serif',
      margin: '0',
      padding: '4px 0',
      width: '100%',
      background: 'none',
      textAlign: 'left',
      color: 'inherit',
    },
    mdl_textfield__input_type_number: {
      MozAppearance: 'textfield',
    },
    mdl_textfield__input_type_number____webkit_inner_spin_button: {
      WebkitAppearance: 'none',
      margin: '0',
    },
    mdl_textfield__input_type_number____webkit_outer_spin_button: {
      WebkitAppearance: 'none',
      margin: '0',
    },
    mdl_textfield_is_focused__mdl_textfield__input: {
      outline: 'none',
    },
    mdl_textfield_is_invalid__mdl_textfield__input: {
      borderColor: 'rgb(213,0,0)',
      boxShadow: 'none',
    },
    fieldset_disabled___mdl_textfield__mdl_textfield__input: {
      backgroundColor: 'transparent',
      borderBottom: '1px dotted rgba(0,0,0, 0.12)',
      color: 'rgba(0,0,0, 0.26)',
    },
    mdl_textfield_is_disabled__mdl_textfield__input: {
      backgroundColor: 'transparent',
      borderBottom: '1px dotted rgba(0,0,0, 0.12)',
      color: 'rgba(0,0,0, 0.26)',
    },
    mdl_textfield_textarea_mdl_textfield__input: {
      display: 'block',
    },
    mdl_textfield__label: {
      fontWeight: 'normal',
      marginBottom: '0',
    },
    mdl_textfield_is_dirty__mdl_textfield__label: {
      visibility: 'hidden',
    },
    mdl_textfield_has_placeholder__mdl_textfield__label: {
      visibility: 'hidden',
    },
    mdl_textfield__floating_label__mdl_textfield__label: {
      transitionDuration: '.2s',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    mdl_textfield__floating_label_has_placeholder__mdl_textfield__label: {
      color: 'rgb(63,81,181)',
      fontSize: '12px',
      top: '4px',
      visibility: 'visible',
    },
    fieldset_disabled___mdl_textfield__mdl_textfield__label: {
      color: 'rgba(0,0,0, 0.26)',
    },
    mdl_textfield_is_disabled_is_disabled__mdl_textfield__label: {
      color: 'rgba(0,0,0, 0.26)',
    },
    mdl_textfield__floating_label_is_focused__mdl_textfield__label: {
      color: '#757575',
    },
    mdl_textfield__floating_label_is_dirty__mdl_textfield__label: {
      color: '#757575',
    },
    mdl_textfield__floating_label_is_focused__mdl_textfield__expandable_holder__mdl_textfield__label: {
      top: '-16px',
    },
    mdl_textfield__floating_label_is_dirty__mdl_textfield__expandable_holder__mdl_textfield__label: {
      top: '-16px',
    },
    mdl_textfield__floating_label_has_placeholder__mdl_textfield__expandable_holder__mdl_textfield__label: {
      top: '-16px',
    },
    mdl_textfield__floating_label_is_invalid__mdl_textfield__label: {
      color: 'rgb(213,0,0)',
      fontSize: '12px',
    },
    mdl_textfield__label_after: {
      backgroundColor: 'rgb(63,81,181)',
      bottom: '20px',
      content: '""',
      height: '2px',
      left: '45%',
      position: 'absolute',
      transitionDuration: '.2s',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      visibility: 'hidden',
      width: '10px',
    },
    mdl_textfield_is_focused__mdl_textfield__label_after: {
      left: '0',
      visibility: 'visible',
      width: '100%',
    },
    mdl_textfield_is_invalid__mdl_textfield__label_after: {
      backgroundColor: 'rgb(213,0,0)',
    },
    mdl_textfield__error: {
      color: 'rgb(213,0,0)',
      position: 'absolute',
      fontSize: '12px',
      marginTop: '3px',
      visibility: 'hidden',
      display: 'block',
    },
    mdl_textfield_is_invalid__mdl_textfield__error: {
      visibility: 'visible',
    },
    mdl_textfield__expandable_holder: {
      display: 'inline-block',
      position: 'relative',
      marginLeft: '32px',
      transitionDuration: '.2s',
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      maxWidth: '.1px',
    },
    mdl_textfield_is_focused__mdl_textfield__expandable_holder: {
      maxWidth: '600px',
    },
    mdl_textfield_is_dirty__mdl_textfield__expandable_holder: {
      maxWidth: '600px',
    },
    mdl_textfield__expandable_holder__mdl_textfield__label_after: {
      bottom: '0',
    },
    firebaseui_container: {
      backgroundColor: '#fff',
      boxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      WebkitBoxSizing: 'border-box',
      color: 'rgba(0,0,0,0.87)',
      direction: 'ltr',
      font: '16px Roboto,arial,sans-serif',
      margin: '0 auto',
      maxWidth: '360px',
      overflow: 'visible',
      position: 'relative',
      textAlign: 'left',
      width: '100%',
    },
    firebaseui_container_mdl_card: {
      overflow: 'visible',
    },
    firebaseui_card_header: {
      padding: '24px 24px 0 24px',
    },
    firebaseui_card_content: {
      padding: '0 24px',
    },
    firebaseui_card_footer: {
      padding: '0 24px',
    },
    firebaseui_card_actions: {
      boxSizing: 'border-box',
      display: 'table',
      fontSize: '14px',
      padding: '8px 24px 24px 24px',
      textAlign: 'left',
      width: '100%',
    },
    firebaseui_form_links: {
      display: 'table-cell',
      verticalAlign: 'middle',
      width: '100%',
    },
    firebaseui_form_actions: {
      display: 'table-cell',
      textAlign: 'right',
      whiteSpace: 'nowrap',
      width: '100%',
    },
    firebaseui_title: {
      paddingBottom: '16px',
    },
    firebaseui_subtitle: {
      margin: '16px 0',
    },
    firebaseui_text: {
      color: 'rgba(0,0,0,0.87)',
      direction: 'ltr',
      fontSize: '16px',
      lineHeight: '24px',
      textAlign: 'left',
    },
    firebaseui_id_page_password_recovery_email_sent_p_firebaseui_text: {
      margin: '16px 0',
    },
    firebaseui_text_emphasis: {
      fontWeight: '700',
    },
    firebaseui_error: {
      color: '#dd2c00',
      direction: 'ltr',
      fontSize: '12px',
      lineHeight: '16px',
      margin: '0',
      textAlign: 'left',
    },
    firebaseui_text_input_error: {
      margin: '-16px 0 16px',
    },
    firebaseui_error_wrapper: {
      minHeight: '16px',
    },
    firebaseui_list_item: {
      direction: 'ltr',
      margin: '0',
      padding: '0',
      textAlign: 'left',
    },
    firebaseui_hidden: {
      display: 'none',
    },
    firebaseui_relative_wrapper: {
      position: 'relative',
    },
    firebaseui_label: {
      color: 'rgba(0,0,0,0.54)',
      direction: 'ltr',
      fontSize: '16px',
      textAlign: 'left',
    },
    firebaseui_input: {
      borderRadius: '0',
      color: 'rgba(0,0,0,0.87)',
      direction: 'ltr',
      fontSize: '16px',
      width: '100%',
    },
    firebaseui_input_invalid: {
      borderColor: '#dd2c00',
    },
    input_firebaseui_input: {
      direction: 'ltr',
      textAlign: 'left',
    },
    input_firebaseui_input_invalid: {
      direction: 'ltr',
      textAlign: 'left',
    },
    firebaseui_textfield: {
      width: '100%',
    },
    firebaseui_textfield_mdl_textfield__firebaseui_input: {
      borderColor: 'rgba(0,0,0,0.12)',
    },
    firebaseui_textfield_mdl_textfield__firebaseui_label__after: {
      backgroundColor: '#3f51b5',
    },
    firebaseui_textfield_invalid_mdl_textfield__firebaseui_input: {
      borderColor: '#dd2c00',
    },
    firebaseui_textfield_invalid_mdl_textfield__firebaseui_label__after: {
      backgroundColor: '#dd2c00',
    },
    firebaseui_button: {
      display: 'inline-block',
      height: '36px',
      marginLeft: '8px',
      minWidth: '88px',
    },
    firebaseui_link: {
      color: '#4285f4',
      fontVariant: 'normal',
      fontWeight: 'normal',
      textDecoration: 'none',
    },
    firebaseui_link_hover: {
      textDecoration: 'underline',
    },
    firebaseui_indent: {
      marginLeft: '1em',
    },
    firebaseui_tos: {
      color: '#757575',
      direction: 'ltr',
      fontSize: '12px',
      lineHeight: '16px',
      marginBottom: '24px',
      marginTop: '0',
      textAlign: 'left',
    },
    firebaseui_provider_sign_in_footer__firebaseui_tos: {
      textAlign: 'center',
    },
    firebaseui_tos_list: {
      listStyle: 'none',
      textAlign: 'right',
    },
    firebaseui_inline_list_item: {
      display: 'inline-block',
      marginLeft: '5px',
      marginRight: '5px',
    },
    firebaseui_page_provider_sign_in: {
      background: 'inherit',
    },
    firebaseui_page_select_tenant: {
      background: 'inherit',
    },
    firebaseui_idp_list: {
      listStyle: 'none',
      margin: '1em 0',
      padding: '0',
    },
    firebaseui_tenant_list: {
      listStyle: 'none',
      margin: '1em 0',
      padding: '0',
    },
    firebaseui_idp_button: {
      direction: 'ltr',
      fontWeight: '500',
      height: 'auto',
      lineHeight: 'normal',
      maxWidth: '220px',
      minHeight: '40px',
      padding: '8px 16px',
      textAlign: 'left',
      width: '100%',
    },
    firebaseui_tenant_button: {
      direction: 'ltr',
      fontWeight: '500',
      height: 'auto',
      lineHeight: 'normal',
      maxWidth: '220px',
      minHeight: '40px',
      padding: '8px 16px',
      textAlign: 'left',
      width: '100%',
    },
    firebaseui_idp_list__firebaseui_list_item: {
      marginBottom: '15px',
      textAlign: 'center',
    },
    firebaseui_tenant_list__firebaseui_list_item: {
      marginBottom: '15px',
      textAlign: 'center',
    },
    firebaseui_idp_icon_wrapper: {
      display: 'table-cell',
      verticalAlign: 'middle',
    },
    firebaseui_idp_icon: {
      border: 'none',
      display: 'inline-block',
      height: '18px',
      verticalAlign: 'middle',
      width: '18px',
    },
    firebaseui_idp_favicon: {
      border: 'none',
      display: 'inline-block',
      height: '14px',
      marginRight: '5px',
      verticalAlign: 'middle',
      width: '14px',
    },
    firebaseui_idp_text: {
      color: '#fff',
      display: 'table-cell',
      fontSize: '14px',
      paddingLeft: '16px',
      textTransform: 'none',
      verticalAlign: 'middle',
    },
    firebaseui_idp_text_firebaseui_idp_text_long: {
      display: 'table-cell',
    },
    firebaseui_idp_text_firebaseui_idp_text_short: {
      display: 'none',
    },
    '@media (max-width:268px)': {
      __expression__: '(max-width:268px)',
      firebaseui_idp_text_firebaseui_idp_text_long: {
        display: 'none',
      },
      firebaseui_idp_text_firebaseui_idp_text_short: {
        display: 'table-cell',
      },
    },
    '@media (max-width:320px)': {
      __expression__: '(max-width:320px)',
      firebaseui_recaptcha_container_div_div: {
        transform: 'scale(0.9)',
        WebkitTransform: 'scale(0.9)',
        transformOrigin: '0 0',
        WebkitTransformOrigin: '0 0',
      },
    },
    firebaseui_idp_google__firebaseui_idp_text: {
      color: '#757575',
    },
    data_provider_id__yahoo_com____firebaseui_idp_icon_wrapper__firebaseui_idp_icon: {
      height: '22px',
      width: '22px',
    },
    firebaseui_info_bar: {
      backgroundColor: '#f9edbe',
      border: '1px solid #f0c36d',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      WebkitBoxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      MozBoxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      left: '10%',
      padding: '8px 16px',
      position: 'absolute',
      right: '10%',
      textAlign: 'center',
      top: '0',
    },
    firebaseui_info_bar_message: {
      fontSize: '12px',
      margin: '0',
    },
    firebaseui_dialog: {
      boxSizing: 'border-box',
      color: 'rgba(0,0,0,0.87)',
      font: '16px Roboto,arial,sans-serif',
      height: 'auto',
      padding: '24px',
      textAlign: 'left',
    },
    firebaseui_dialog_icon_wrapper: {
      display: 'table-cell',
      verticalAlign: 'middle',
    },
    firebaseui_dialog_icon: {
      float: 'left',
      height: '40px',
      marginRight: '24px',
      width: '40px',
    },
    firebaseui_progress_dialog_message: {
      display: 'table-cell',
      fontSize: '16px',
      fontWeight: '400',
      minHeight: '40px',
      verticalAlign: 'middle',
    },
    firebaseui_progress_dialog_loading_icon: {
      height: '28px',
      margin: '6px 30px 6px 6px',
      width: '28px',
    },
    firebaseui_icon_done: {
      backgroundImage: 'url("https://www.gstatic.com/images/icons/material/system/2x/done_googgreen_36dp.png")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '36px 36px',
    },
    firebaseui_phone_number: {
      display: 'flex',
    },
    firebaseui_country_selector: {
      backgroundImage: "url('https://www.gstatic.com/images/icons/material/system/1x/arrow_drop_down_grey600_18dp.png')",
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '18px auto',
      borderRadius: '0',
      borderBottom: '1px solid rgba(0,0,0,0.12)',
      color: 'rgba(0,0,0,0.87)',
      flexShrink: '0',
      fontSize: '16px',
      fontWeight: 'normal',
      height: 'initial',
      lineHeight: 'normal',
      margin: '20px 24px 20px 0',
      padding: '4px 20px 4px 0',
      width: '90px',
    },
    firebaseui_country_selector_flag: {
      display: 'inline-block',
      marginRight: '1ex',
    },
    firebaseui_flag: {
      backgroundImage: 'url("https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/flags_sprite_2x.png")',
      backgroundSize: '100% auto',
      filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.54))',
      height: '14px',
      width: '24px',
    },
    firebaseui_list_box_dialog: {
      maxHeight: '90%',
      overflow: 'auto',
      padding: '8px 0 0 0',
    },
    firebaseui_list_box_actions: {
      paddingBottom: '8px',
    },
    firebaseui_list_box_icon_wrapper: {
      display: 'table-cell',
      paddingRight: '24px',
      verticalAlign: 'top',
    },
    firebaseui_list_box_label_wrapper: {
      display: 'table-cell',
      verticalAlign: 'top',
    },
    firebaseui_list_box_dialog_button: {
      color: 'rgba(0,0,0,0.87)',
      direction: 'ltr',
      fontSize: '16px',
      fontWeight: 'normal',
      height: 'initial',
      lineHeight: 'normal',
      minHeight: '48px',
      padding: '14px 24px',
      textAlign: 'left',
      textTransform: 'none',
      width: '100%',
    },
    firebaseui_phone_number_error: {
      marginLeft: '114px',
    },
    mdl_progress_firebaseui_busy_indicator: {
      height: '2px',
      left: '0',
      position: 'absolute',
      top: '55px',
      width: '100%',
    },
    mdl_spinner_firebaseui_busy_indicator: {
      height: '56px',
      left: '0px',
      margin: 'auto',
      position: 'absolute',
      right: '0px',
      top: '30%',
      width: '56px',
    },
    firebaseui_callback_indicator_container__firebaseui_busy_indicator: {
      top: '0px',
    },
    firebaseui_callback_indicator_container: {
      height: '120px',
    },
    firebaseui_new_password_component: {
      display: 'inline-block',
      position: 'relative',
      width: '100%',
    },
    firebaseui_input_floating_button: {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'block',
      height: '24px',
      position: 'absolute',
      right: '0',
      top: '20px',
      width: '24px',
    },
    firebaseui_input_toggle_on: {
      backgroundImage: 'url("https://www.gstatic.com/images/icons/material/system/1x/visibility_black_24dp.png")',
    },
    firebaseui_input_toggle_off: {
      backgroundImage: 'url("https://www.gstatic.com/images/icons/material/system/1x/visibility_off_black_24dp.png")',
    },
    firebaseui_input_toggle_focus: {
      opacity: '0.87',
    },
    firebaseui_input_toggle_blur: {
      opacity: '0.38',
    },
    firebaseui_recaptcha_wrapper: {
      display: 'table',
      margin: '0 auto',
      paddingBottom: '8px',
    },
    firebaseui_recaptcha_container: {
      display: 'table-cell',
    },
    firebaseui_recaptcha_error_wrapper: {
      captionSide: 'bottom',
      display: 'table-caption',
    },
    firebaseui_change_phone_number_link: {
      display: 'block',
    },
    firebaseui_resend_container: {
      direction: 'ltr',
      margin: '20px 0',
      textAlign: 'center',
    },
    firebaseui_id_resend_countdown: {
      color: 'rgba(0,0,0,0.38)',
    },
    firebaseui_id_page_phone_sign_in_start__firebaseui_form_actions_div: {
      float: 'left',
    },
    '@media (max-width:480px)': {
      __expression__: '(max-width:480px)',
      firebaseui_container: {
        boxShadow: 'none',
        maxWidth: 'none',
        width: '100%',
      },
      firebaseui_card_header: {
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '16px',
        padding: '16px 24px 0 24px',
      },
      firebaseui_title: {
        paddingBottom: '16px',
      },
      firebaseui_card_actions: {
        paddingRight: '24px',
      },
      firebaseui_busy_indicator: {
        top: '0px',
      },
    },
    firebaseui_id_page_blank: {
      background: 'inherit',
      height: '64px',
    },
    firebaseui_id_page_spinner: {
      background: 'inherit',
      height: '64px',
    },
    firebaseui_email_sent: {
      backgroundImage: 'url("https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/success_status.png")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '64px 64px',
      height: '64px',
      marginTop: '16px',
      textAlign: 'center',
    },
    firebaseui_text_justify: {
      textAlign: 'justify',
    },
    firebaseui_flag_KY: {
      backgroundPosition: '-0px -0px',
    },
    firebaseui_flag_AC: {
      backgroundPosition: '-0px -14px',
    },
    firebaseui_flag_AE: {
      backgroundPosition: '-0px -28px',
    },
    firebaseui_flag_AF: {
      backgroundPosition: '-0px -42px',
    },
    firebaseui_flag_AG: {
      backgroundPosition: '-0px -56px',
    },
    firebaseui_flag_AI: {
      backgroundPosition: '-0px -70px',
    },
    firebaseui_flag_AL: {
      backgroundPosition: '-0px -84px',
    },
    firebaseui_flag_AM: {
      backgroundPosition: '-0px -98px',
    },
    firebaseui_flag_AO: {
      backgroundPosition: '-0px -112px',
    },
    firebaseui_flag_AQ: {
      backgroundPosition: '-0px -126px',
    },
    firebaseui_flag_AR: {
      backgroundPosition: '-0px -140px',
    },
    firebaseui_flag_AS: {
      backgroundPosition: '-0px -154px',
    },
    firebaseui_flag_AT: {
      backgroundPosition: '-0px -168px',
    },
    firebaseui_flag_AU: {
      backgroundPosition: '-0px -182px',
    },
    firebaseui_flag_AW: {
      backgroundPosition: '-0px -196px',
    },
    firebaseui_flag_AX: {
      backgroundPosition: '-0px -210px',
    },
    firebaseui_flag_AZ: {
      backgroundPosition: '-0px -224px',
    },
    firebaseui_flag_BA: {
      backgroundPosition: '-0px -238px',
    },
    firebaseui_flag_BB: {
      backgroundPosition: '-0px -252px',
    },
    firebaseui_flag_BD: {
      backgroundPosition: '-0px -266px',
    },
    firebaseui_flag_BE: {
      backgroundPosition: '-0px -280px',
    },
    firebaseui_flag_BF: {
      backgroundPosition: '-0px -294px',
    },
    firebaseui_flag_BG: {
      backgroundPosition: '-0px -308px',
    },
    firebaseui_flag_BH: {
      backgroundPosition: '-0px -322px',
    },
    firebaseui_flag_BI: {
      backgroundPosition: '-0px -336px',
    },
    firebaseui_flag_BJ: {
      backgroundPosition: '-0px -350px',
    },
    firebaseui_flag_BL: {
      backgroundPosition: '-0px -364px',
    },
    firebaseui_flag_BM: {
      backgroundPosition: '-0px -378px',
    },
    firebaseui_flag_BN: {
      backgroundPosition: '-0px -392px',
    },
    firebaseui_flag_BO: {
      backgroundPosition: '-0px -406px',
    },
    firebaseui_flag_BQ: {
      backgroundPosition: '-0px -420px',
    },
    firebaseui_flag_BR: {
      backgroundPosition: '-0px -434px',
    },
    firebaseui_flag_BS: {
      backgroundPosition: '-0px -448px',
    },
    firebaseui_flag_BT: {
      backgroundPosition: '-0px -462px',
    },
    firebaseui_flag_BV: {
      backgroundPosition: '-0px -476px',
    },
    firebaseui_flag_BW: {
      backgroundPosition: '-0px -490px',
    },
    firebaseui_flag_BY: {
      backgroundPosition: '-0px -504px',
    },
    firebaseui_flag_BZ: {
      backgroundPosition: '-0px -518px',
    },
    firebaseui_flag_CA: {
      backgroundPosition: '-0px -532px',
    },
    firebaseui_flag_CC: {
      backgroundPosition: '-0px -546px',
    },
    firebaseui_flag_CD: {
      backgroundPosition: '-0px -560px',
    },
    firebaseui_flag_CF: {
      backgroundPosition: '-0px -574px',
    },
    firebaseui_flag_CG: {
      backgroundPosition: '-0px -588px',
    },
    firebaseui_flag_CH: {
      backgroundPosition: '-0px -602px',
    },
    firebaseui_flag_CI: {
      backgroundPosition: '-0px -616px',
    },
    firebaseui_flag_CK: {
      backgroundPosition: '-0px -630px',
    },
    firebaseui_flag_CL: {
      backgroundPosition: '-0px -644px',
    },
    firebaseui_flag_CM: {
      backgroundPosition: '-0px -658px',
    },
    firebaseui_flag_CN: {
      backgroundPosition: '-0px -672px',
    },
    firebaseui_flag_CO: {
      backgroundPosition: '-0px -686px',
    },
    firebaseui_flag_CP: {
      backgroundPosition: '-0px -700px',
    },
    firebaseui_flag_CR: {
      backgroundPosition: '-0px -714px',
    },
    firebaseui_flag_CU: {
      backgroundPosition: '-0px -728px',
    },
    firebaseui_flag_CV: {
      backgroundPosition: '-0px -742px',
    },
    firebaseui_flag_CW: {
      backgroundPosition: '-0px -756px',
    },
    firebaseui_flag_CX: {
      backgroundPosition: '-0px -770px',
    },
    firebaseui_flag_CY: {
      backgroundPosition: '-0px -784px',
    },
    firebaseui_flag_CZ: {
      backgroundPosition: '-0px -798px',
    },
    firebaseui_flag_DE: {
      backgroundPosition: '-0px -812px',
    },
    firebaseui_flag_DG: {
      backgroundPosition: '-0px -826px',
    },
    firebaseui_flag_DJ: {
      backgroundPosition: '-0px -840px',
    },
    firebaseui_flag_DK: {
      backgroundPosition: '-0px -854px',
    },
    firebaseui_flag_DM: {
      backgroundPosition: '-0px -868px',
    },
    firebaseui_flag_DO: {
      backgroundPosition: '-0px -882px',
    },
    firebaseui_flag_DZ: {
      backgroundPosition: '-0px -896px',
    },
    firebaseui_flag_EA: {
      backgroundPosition: '-0px -910px',
    },
    firebaseui_flag_EC: {
      backgroundPosition: '-0px -924px',
    },
    firebaseui_flag_EE: {
      backgroundPosition: '-0px -938px',
    },
    firebaseui_flag_EG: {
      backgroundPosition: '-0px -952px',
    },
    firebaseui_flag_EH: {
      backgroundPosition: '-0px -966px',
    },
    firebaseui_flag_ER: {
      backgroundPosition: '-0px -980px',
    },
    firebaseui_flag_ES: {
      backgroundPosition: '-0px -994px',
    },
    firebaseui_flag_ET: {
      backgroundPosition: '-0px -1008px',
    },
    firebaseui_flag_EU: {
      backgroundPosition: '-0px -1022px',
    },
    firebaseui_flag_FI: {
      backgroundPosition: '-0px -1036px',
    },
    firebaseui_flag_FJ: {
      backgroundPosition: '-0px -1050px',
    },
    firebaseui_flag_FK: {
      backgroundPosition: '-0px -1064px',
    },
    firebaseui_flag_FM: {
      backgroundPosition: '-0px -1078px',
    },
    firebaseui_flag_FO: {
      backgroundPosition: '-0px -1092px',
    },
    firebaseui_flag_FR: {
      backgroundPosition: '-0px -1106px',
    },
    firebaseui_flag_GA: {
      backgroundPosition: '-0px -1120px',
    },
    firebaseui_flag_GB: {
      backgroundPosition: '-0px -1134px',
    },
    firebaseui_flag_GD: {
      backgroundPosition: '-0px -1148px',
    },
    firebaseui_flag_GE: {
      backgroundPosition: '-0px -1162px',
    },
    firebaseui_flag_GF: {
      backgroundPosition: '-0px -1176px',
    },
    firebaseui_flag_GG: {
      backgroundPosition: '-0px -1190px',
    },
    firebaseui_flag_GH: {
      backgroundPosition: '-0px -1204px',
    },
    firebaseui_flag_GI: {
      backgroundPosition: '-0px -1218px',
    },
    firebaseui_flag_GL: {
      backgroundPosition: '-0px -1232px',
    },
    firebaseui_flag_GM: {
      backgroundPosition: '-0px -1246px',
    },
    firebaseui_flag_GN: {
      backgroundPosition: '-0px -1260px',
    },
    firebaseui_flag_GP: {
      backgroundPosition: '-0px -1274px',
    },
    firebaseui_flag_GQ: {
      backgroundPosition: '-0px -1288px',
    },
    firebaseui_flag_GR: {
      backgroundPosition: '-0px -1302px',
    },
    firebaseui_flag_GS: {
      backgroundPosition: '-0px -1316px',
    },
    firebaseui_flag_GT: {
      backgroundPosition: '-0px -1330px',
    },
    firebaseui_flag_GU: {
      backgroundPosition: '-0px -1344px',
    },
    firebaseui_flag_GW: {
      backgroundPosition: '-0px -1358px',
    },
    firebaseui_flag_GY: {
      backgroundPosition: '-0px -1372px',
    },
    firebaseui_flag_HK: {
      backgroundPosition: '-0px -1386px',
    },
    firebaseui_flag_HM: {
      backgroundPosition: '-0px -1400px',
    },
    firebaseui_flag_HN: {
      backgroundPosition: '-0px -1414px',
    },
    firebaseui_flag_HR: {
      backgroundPosition: '-0px -1428px',
    },
    firebaseui_flag_HT: {
      backgroundPosition: '-0px -1442px',
    },
    firebaseui_flag_HU: {
      backgroundPosition: '-0px -1456px',
    },
    firebaseui_flag_IC: {
      backgroundPosition: '-0px -1470px',
    },
    firebaseui_flag_ID: {
      backgroundPosition: '-0px -1484px',
    },
    firebaseui_flag_IE: {
      backgroundPosition: '-0px -1498px',
    },
    firebaseui_flag_IL: {
      backgroundPosition: '-0px -1512px',
    },
    firebaseui_flag_IM: {
      backgroundPosition: '-0px -1526px',
    },
    firebaseui_flag_IN: {
      backgroundPosition: '-0px -1540px',
    },
    firebaseui_flag_IO: {
      backgroundPosition: '-0px -1554px',
    },
    firebaseui_flag_IQ: {
      backgroundPosition: '-0px -1568px',
    },
    firebaseui_flag_IR: {
      backgroundPosition: '-0px -1582px',
    },
    firebaseui_flag_IS: {
      backgroundPosition: '-0px -1596px',
    },
    firebaseui_flag_IT: {
      backgroundPosition: '-0px -1610px',
    },
    firebaseui_flag_JE: {
      backgroundPosition: '-0px -1624px',
    },
    firebaseui_flag_JM: {
      backgroundPosition: '-0px -1638px',
    },
    firebaseui_flag_JO: {
      backgroundPosition: '-0px -1652px',
    },
    firebaseui_flag_JP: {
      backgroundPosition: '-0px -1666px',
    },
    firebaseui_flag_KE: {
      backgroundPosition: '-0px -1680px',
    },
    firebaseui_flag_KG: {
      backgroundPosition: '-0px -1694px',
    },
    firebaseui_flag_KH: {
      backgroundPosition: '-0px -1708px',
    },
    firebaseui_flag_KI: {
      backgroundPosition: '-0px -1722px',
    },
    firebaseui_flag_KM: {
      backgroundPosition: '-0px -1736px',
    },
    firebaseui_flag_KN: {
      backgroundPosition: '-0px -1750px',
    },
    firebaseui_flag_KP: {
      backgroundPosition: '-0px -1764px',
    },
    firebaseui_flag_KR: {
      backgroundPosition: '-0px -1778px',
    },
    firebaseui_flag_KW: {
      backgroundPosition: '-0px -1792px',
    },
    firebaseui_flag_AD: {
      backgroundPosition: '-0px -1806px',
    },
    firebaseui_flag_KZ: {
      backgroundPosition: '-0px -1820px',
    },
    firebaseui_flag_LA: {
      backgroundPosition: '-0px -1834px',
    },
    firebaseui_flag_LB: {
      backgroundPosition: '-0px -1848px',
    },
    firebaseui_flag_LC: {
      backgroundPosition: '-0px -1862px',
    },
    firebaseui_flag_LI: {
      backgroundPosition: '-0px -1876px',
    },
    firebaseui_flag_LK: {
      backgroundPosition: '-0px -1890px',
    },
    firebaseui_flag_LR: {
      backgroundPosition: '-0px -1904px',
    },
    firebaseui_flag_LS: {
      backgroundPosition: '-0px -1918px',
    },
    firebaseui_flag_LT: {
      backgroundPosition: '-0px -1932px',
    },
    firebaseui_flag_LU: {
      backgroundPosition: '-0px -1946px',
    },
    firebaseui_flag_LV: {
      backgroundPosition: '-0px -1960px',
    },
    firebaseui_flag_LY: {
      backgroundPosition: '-0px -1974px',
    },
    firebaseui_flag_MA: {
      backgroundPosition: '-0px -1988px',
    },
    firebaseui_flag_MC: {
      backgroundPosition: '-0px -2002px',
    },
    firebaseui_flag_MD: {
      backgroundPosition: '-0px -2016px',
    },
    firebaseui_flag_ME: {
      backgroundPosition: '-0px -2030px',
    },
    firebaseui_flag_MF: {
      backgroundPosition: '-0px -2044px',
    },
    firebaseui_flag_MG: {
      backgroundPosition: '-0px -2058px',
    },
    firebaseui_flag_MH: {
      backgroundPosition: '-0px -2072px',
    },
    firebaseui_flag_MK: {
      backgroundPosition: '-0px -2086px',
    },
    firebaseui_flag_ML: {
      backgroundPosition: '-0px -2100px',
    },
    firebaseui_flag_MM: {
      backgroundPosition: '-0px -2114px',
    },
    firebaseui_flag_MN: {
      backgroundPosition: '-0px -2128px',
    },
    firebaseui_flag_MO: {
      backgroundPosition: '-0px -2142px',
    },
    firebaseui_flag_MP: {
      backgroundPosition: '-0px -2156px',
    },
    firebaseui_flag_MQ: {
      backgroundPosition: '-0px -2170px',
    },
    firebaseui_flag_MR: {
      backgroundPosition: '-0px -2184px',
    },
    firebaseui_flag_MS: {
      backgroundPosition: '-0px -2198px',
    },
    firebaseui_flag_MT: {
      backgroundPosition: '-0px -2212px',
    },
    firebaseui_flag_MU: {
      backgroundPosition: '-0px -2226px',
    },
    firebaseui_flag_MV: {
      backgroundPosition: '-0px -2240px',
    },
    firebaseui_flag_MW: {
      backgroundPosition: '-0px -2254px',
    },
    firebaseui_flag_MX: {
      backgroundPosition: '-0px -2268px',
    },
    firebaseui_flag_MY: {
      backgroundPosition: '-0px -2282px',
    },
    firebaseui_flag_MZ: {
      backgroundPosition: '-0px -2296px',
    },
    firebaseui_flag_NA: {
      backgroundPosition: '-0px -2310px',
    },
    firebaseui_flag_NC: {
      backgroundPosition: '-0px -2324px',
    },
    firebaseui_flag_NE: {
      backgroundPosition: '-0px -2338px',
    },
    firebaseui_flag_NF: {
      backgroundPosition: '-0px -2352px',
    },
    firebaseui_flag_NG: {
      backgroundPosition: '-0px -2366px',
    },
    firebaseui_flag_NI: {
      backgroundPosition: '-0px -2380px',
    },
    firebaseui_flag_NL: {
      backgroundPosition: '-0px -2394px',
    },
    firebaseui_flag_NO: {
      backgroundPosition: '-0px -2408px',
    },
    firebaseui_flag_NP: {
      backgroundPosition: '-0px -2422px',
    },
    firebaseui_flag_NR: {
      backgroundPosition: '-0px -2436px',
    },
    firebaseui_flag_NU: {
      backgroundPosition: '-0px -2450px',
    },
    firebaseui_flag_NZ: {
      backgroundPosition: '-0px -2464px',
    },
    firebaseui_flag_OM: {
      backgroundPosition: '-0px -2478px',
    },
    firebaseui_flag_PA: {
      backgroundPosition: '-0px -2492px',
    },
    firebaseui_flag_PE: {
      backgroundPosition: '-0px -2506px',
    },
    firebaseui_flag_PF: {
      backgroundPosition: '-0px -2520px',
    },
    firebaseui_flag_PG: {
      backgroundPosition: '-0px -2534px',
    },
    firebaseui_flag_PH: {
      backgroundPosition: '-0px -2548px',
    },
    firebaseui_flag_PK: {
      backgroundPosition: '-0px -2562px',
    },
    firebaseui_flag_PL: {
      backgroundPosition: '-0px -2576px',
    },
    firebaseui_flag_PM: {
      backgroundPosition: '-0px -2590px',
    },
    firebaseui_flag_PN: {
      backgroundPosition: '-0px -2604px',
    },
    firebaseui_flag_PR: {
      backgroundPosition: '-0px -2618px',
    },
    firebaseui_flag_PS: {
      backgroundPosition: '-0px -2632px',
    },
    firebaseui_flag_PT: {
      backgroundPosition: '-0px -2646px',
    },
    firebaseui_flag_PW: {
      backgroundPosition: '-0px -2660px',
    },
    firebaseui_flag_PY: {
      backgroundPosition: '-0px -2674px',
    },
    firebaseui_flag_QA: {
      backgroundPosition: '-0px -2688px',
    },
    firebaseui_flag_RE: {
      backgroundPosition: '-0px -2702px',
    },
    firebaseui_flag_RO: {
      backgroundPosition: '-0px -2716px',
    },
    firebaseui_flag_RS: {
      backgroundPosition: '-0px -2730px',
    },
    firebaseui_flag_RU: {
      backgroundPosition: '-0px -2744px',
    },
    firebaseui_flag_RW: {
      backgroundPosition: '-0px -2758px',
    },
    firebaseui_flag_SA: {
      backgroundPosition: '-0px -2772px',
    },
    firebaseui_flag_SB: {
      backgroundPosition: '-0px -2786px',
    },
    firebaseui_flag_SC: {
      backgroundPosition: '-0px -2800px',
    },
    firebaseui_flag_SD: {
      backgroundPosition: '-0px -2814px',
    },
    firebaseui_flag_SE: {
      backgroundPosition: '-0px -2828px',
    },
    firebaseui_flag_SG: {
      backgroundPosition: '-0px -2842px',
    },
    firebaseui_flag_SH: {
      backgroundPosition: '-0px -2856px',
    },
    firebaseui_flag_SI: {
      backgroundPosition: '-0px -2870px',
    },
    firebaseui_flag_SJ: {
      backgroundPosition: '-0px -2884px',
    },
    firebaseui_flag_SK: {
      backgroundPosition: '-0px -2898px',
    },
    firebaseui_flag_SL: {
      backgroundPosition: '-0px -2912px',
    },
    firebaseui_flag_SM: {
      backgroundPosition: '-0px -2926px',
    },
    firebaseui_flag_SN: {
      backgroundPosition: '-0px -2940px',
    },
    firebaseui_flag_SO: {
      backgroundPosition: '-0px -2954px',
    },
    firebaseui_flag_SR: {
      backgroundPosition: '-0px -2968px',
    },
    firebaseui_flag_SS: {
      backgroundPosition: '-0px -2982px',
    },
    firebaseui_flag_ST: {
      backgroundPosition: '-0px -2996px',
    },
    firebaseui_flag_SV: {
      backgroundPosition: '-0px -3010px',
    },
    firebaseui_flag_SX: {
      backgroundPosition: '-0px -3024px',
    },
    firebaseui_flag_SY: {
      backgroundPosition: '-0px -3038px',
    },
    firebaseui_flag_SZ: {
      backgroundPosition: '-0px -3052px',
    },
    firebaseui_flag_TA: {
      backgroundPosition: '-0px -3066px',
    },
    firebaseui_flag_TC: {
      backgroundPosition: '-0px -3080px',
    },
    firebaseui_flag_TD: {
      backgroundPosition: '-0px -3094px',
    },
    firebaseui_flag_TF: {
      backgroundPosition: '-0px -3108px',
    },
    firebaseui_flag_TG: {
      backgroundPosition: '-0px -3122px',
    },
    firebaseui_flag_TH: {
      backgroundPosition: '-0px -3136px',
    },
    firebaseui_flag_TJ: {
      backgroundPosition: '-0px -3150px',
    },
    firebaseui_flag_TK: {
      backgroundPosition: '-0px -3164px',
    },
    firebaseui_flag_TL: {
      backgroundPosition: '-0px -3178px',
    },
    firebaseui_flag_TM: {
      backgroundPosition: '-0px -3192px',
    },
    firebaseui_flag_TN: {
      backgroundPosition: '-0px -3206px',
    },
    firebaseui_flag_TO: {
      backgroundPosition: '-0px -3220px',
    },
    firebaseui_flag_TR: {
      backgroundPosition: '-0px -3234px',
    },
    firebaseui_flag_TT: {
      backgroundPosition: '-0px -3248px',
    },
    firebaseui_flag_TV: {
      backgroundPosition: '-0px -3262px',
    },
    firebaseui_flag_TW: {
      backgroundPosition: '-0px -3276px',
    },
    firebaseui_flag_TZ: {
      backgroundPosition: '-0px -3290px',
    },
    firebaseui_flag_UA: {
      backgroundPosition: '-0px -3304px',
    },
    firebaseui_flag_UG: {
      backgroundPosition: '-0px -3318px',
    },
    firebaseui_flag_UM: {
      backgroundPosition: '-0px -3332px',
    },
    firebaseui_flag_UN: {
      backgroundPosition: '-0px -3346px',
    },
    firebaseui_flag_US: {
      backgroundPosition: '-0px -3360px',
    },
    firebaseui_flag_UY: {
      backgroundPosition: '-0px -3374px',
    },
    firebaseui_flag_UZ: {
      backgroundPosition: '-0px -3388px',
    },
    firebaseui_flag_VA: {
      backgroundPosition: '-0px -3402px',
    },
    firebaseui_flag_VC: {
      backgroundPosition: '-0px -3416px',
    },
    firebaseui_flag_VE: {
      backgroundPosition: '-0px -3430px',
    },
    firebaseui_flag_VG: {
      backgroundPosition: '-0px -3444px',
    },
    firebaseui_flag_VI: {
      backgroundPosition: '-0px -3458px',
    },
    firebaseui_flag_VN: {
      backgroundPosition: '-0px -3472px',
    },
    firebaseui_flag_VU: {
      backgroundPosition: '-0px -3486px',
    },
    firebaseui_flag_WF: {
      backgroundPosition: '-0px -3500px',
    },
    firebaseui_flag_WS: {
      backgroundPosition: '-0px -3514px',
    },
    firebaseui_flag_XK: {
      backgroundPosition: '-0px -3528px',
    },
    firebaseui_flag_YE: {
      backgroundPosition: '-0px -3542px',
    },
    firebaseui_flag_YT: {
      backgroundPosition: '-0px -3556px',
    },
    firebaseui_flag_ZA: {
      backgroundPosition: '-0px -3570px',
    },
    firebaseui_flag_ZM: {
      backgroundPosition: '-0px -3584px',
    },
    firebaseui_flag_ZW: {
      backgroundPosition: '-0px -3598px',
    },
  },
};


export default styles;