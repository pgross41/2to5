// cerner_2^5_2019

// Functions to flag/unflag jiras (from within jira)

window.addFlag = () =>
  AJS.$.ajax({
    url: "/rest/greenhopper/1.0/xboard/issue/flag/flag.json",
    type: "POST",
    data: '{"issueKeys":["' + JIRA.Issue.getIssueKey() + '"],"flag":true}',
    dataType: "json",
    contentType: "application/json",
    success: msg => JIRA.Messages.showSuccessMsg("Add flag success!"),
    error: msg => JIRA.Messages.showErrorMsg("Add flag error :(\n" + msg)
  });

window.removeFlag = () =>
  AJS.$.ajax({
    url: "/rest/greenhopper/1.0/xboard/issue/flag/flag.json",
    type: "POST",
    data: '{"issueKeys":["' + JIRA.Issue.getIssueKey() + '"],"flag":false}',
    dataType: "json",
    contentType: "application/json",
    success: msg => JIRA.Messages.showSuccessMsg("Remove flag success!"),
    error: msg => JIRA.Messages.showErrorMsg("Remove flag error :(\n" + msg)
  });
