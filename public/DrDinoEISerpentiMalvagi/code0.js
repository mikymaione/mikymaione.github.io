gdjs.MainSceneCode = {};
gdjs.MainSceneCode.GDHudTextTitleObjects1= [];
gdjs.MainSceneCode.GDHudTextTitleObjects2= [];
gdjs.MainSceneCode.GDHudTextTitleObjects3= [];
gdjs.MainSceneCode.GDHudTextTitleObjects4= [];
gdjs.MainSceneCode.GDHudTextTitleObjects5= [];
gdjs.MainSceneCode.GDHudTexDeleteObjects1= [];
gdjs.MainSceneCode.GDHudTexDeleteObjects2= [];
gdjs.MainSceneCode.GDHudTexDeleteObjects3= [];
gdjs.MainSceneCode.GDHudTexDeleteObjects4= [];
gdjs.MainSceneCode.GDHudTexDeleteObjects5= [];
gdjs.MainSceneCode.GDHudTextStartObjects1= [];
gdjs.MainSceneCode.GDHudTextStartObjects2= [];
gdjs.MainSceneCode.GDHudTextStartObjects3= [];
gdjs.MainSceneCode.GDHudTextStartObjects4= [];
gdjs.MainSceneCode.GDHudTextStartObjects5= [];
gdjs.MainSceneCode.GDCursorObjects1= [];
gdjs.MainSceneCode.GDCursorObjects2= [];
gdjs.MainSceneCode.GDCursorObjects3= [];
gdjs.MainSceneCode.GDCursorObjects4= [];
gdjs.MainSceneCode.GDCursorObjects5= [];
gdjs.MainSceneCode.GDDeleteButtonObjects1= [];
gdjs.MainSceneCode.GDDeleteButtonObjects2= [];
gdjs.MainSceneCode.GDDeleteButtonObjects3= [];
gdjs.MainSceneCode.GDDeleteButtonObjects4= [];
gdjs.MainSceneCode.GDDeleteButtonObjects5= [];
gdjs.MainSceneCode.GDStartButtonObjects1= [];
gdjs.MainSceneCode.GDStartButtonObjects2= [];
gdjs.MainSceneCode.GDStartButtonObjects3= [];
gdjs.MainSceneCode.GDStartButtonObjects4= [];
gdjs.MainSceneCode.GDStartButtonObjects5= [];
gdjs.MainSceneCode.GDControlsObjects1= [];
gdjs.MainSceneCode.GDControlsObjects2= [];
gdjs.MainSceneCode.GDControlsObjects3= [];
gdjs.MainSceneCode.GDControlsObjects4= [];
gdjs.MainSceneCode.GDControlsObjects5= [];

gdjs.MainSceneCode.conditionTrue_0 = {val:false};
gdjs.MainSceneCode.condition0IsTrue_0 = {val:false};
gdjs.MainSceneCode.condition1IsTrue_0 = {val:false};
gdjs.MainSceneCode.condition2IsTrue_0 = {val:false};
gdjs.MainSceneCode.condition3IsTrue_0 = {val:false};
gdjs.MainSceneCode.conditionTrue_1 = {val:false};
gdjs.MainSceneCode.condition0IsTrue_1 = {val:false};
gdjs.MainSceneCode.condition1IsTrue_1 = {val:false};
gdjs.MainSceneCode.condition2IsTrue_1 = {val:false};
gdjs.MainSceneCode.condition3IsTrue_1 = {val:false};


gdjs.MainSceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("game_data", "coins"));
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("game_data", "coins", 0);
}{runtimeScene.getVariables().get("Coins").setNumber(0);
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("game_data", "coins");
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("game_data", "coins", runtimeScene, runtimeScene.getVariables().get("Coins"));
}}

}


};gdjs.MainSceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("PlayerHp")) <= 0;
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("PlayerHp").setNumber(100);
}{gdjs.evtTools.storage.writeNumberInJSONFile("game_data", "player_hp", 100);
}}

}


};gdjs.MainSceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("game_data", "player_hp"));
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("game_data", "player_hp", 100);
}{runtimeScene.getVariables().get("PlayerHp").setNumber(100);
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("game_data", "player_hp");
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("game_data", "player_hp", runtimeScene, runtimeScene.getVariables().get("PlayerHp"));
}
{ //Subevents
gdjs.MainSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("game_data", "player_max_hp"));
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("game_data", "player_max_hp", 100);
}{runtimeScene.getVariables().get("PlayerMaxHp").setNumber(100);
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("game_data", "player_max_hp");
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("game_data", "player_max_hp", runtimeScene, runtimeScene.getVariables().get("PlayerMaxHp"));
}}

}


};gdjs.MainSceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("game_data", "total_kills"));
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("game_data", "total_kills", 0);
}{runtimeScene.getVariables().get("TotalKills").setNumber(0);
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("game_data", "total_kills");
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("game_data", "total_kills", runtimeScene, runtimeScene.getVariables().get("TotalKills"));
}}

}


};gdjs.MainSceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.MainSceneCode.eventsList0(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList2(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList3(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList4(runtimeScene);
}


};gdjs.MainSceneCode.eventsList6 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.MainSceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.eventsList7 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("HudTextStart"), gdjs.MainSceneCode.GDHudTextStartObjects2);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MainSceneCode.GDStartButtonObjects2);
{for(var i = 0, len = gdjs.MainSceneCode.GDHudTextStartObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTextStartObjects2[i].setColor("248;231;28");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTextStartObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTextStartObjects2[i].setOutline("0;0;0", 4);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTextStartObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTextStartObjects2[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTextStartObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTextStartObjects2[i].setCharacterSize(36);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTextStartObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTextStartObjects2[i].setWrappingWidth(1000);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTextStartObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTextStartObjects2[i].setScale(0.2);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTextStartObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTextStartObjects2[i].setPosition((( gdjs.MainSceneCode.GDStartButtonObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDStartButtonObjects2[0].getPointX("text")),(( gdjs.MainSceneCode.GDStartButtonObjects2.length === 0 ) ? 0 :gdjs.MainSceneCode.GDStartButtonObjects2[0].getPointY("text")));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTextStartObjects2.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTextStartObjects2[i].setZOrder(111);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("DeleteButton"), gdjs.MainSceneCode.GDDeleteButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("HudTexDelete"), gdjs.MainSceneCode.GDHudTexDeleteObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDHudTexDeleteObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTexDeleteObjects1[i].setColor("248;231;28");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTexDeleteObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTexDeleteObjects1[i].setOutline("0;0;0", 4);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTexDeleteObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTexDeleteObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTexDeleteObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTexDeleteObjects1[i].setCharacterSize(36);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTexDeleteObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTexDeleteObjects1[i].setWrappingWidth(1000);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTexDeleteObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTexDeleteObjects1[i].setScale(0.2);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTexDeleteObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTexDeleteObjects1[i].setPosition((( gdjs.MainSceneCode.GDDeleteButtonObjects1.length === 0 ) ? 0 :gdjs.MainSceneCode.GDDeleteButtonObjects1[0].getPointX("text")),(( gdjs.MainSceneCode.GDDeleteButtonObjects1.length === 0 ) ? 0 :gdjs.MainSceneCode.GDDeleteButtonObjects1[0].getPointY("text")));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTexDeleteObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTexDeleteObjects1[i].setZOrder(111);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDHudTexDeleteObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDHudTexDeleteObjects1[i].setString("Delete data");
}
}}

}


};gdjs.MainSceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.MainSceneCode.eventsList7(runtimeScene);
}


};gdjs.MainSceneCode.eventsList9 = function(runtimeScene) {

{



}


{


gdjs.MainSceneCode.eventsList6(runtimeScene);
}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}
{ //Subevents
gdjs.MainSceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.MainSceneCode.eventsList10 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.MainSceneCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


};gdjs.MainSceneCode.mapOfGDgdjs_46MainSceneCode_46GDStartButtonObjects2Objects = Hashtable.newFrom({"StartButton": gdjs.MainSceneCode.GDStartButtonObjects2});gdjs.MainSceneCode.mapOfGDgdjs_46MainSceneCode_46GDDeleteButtonObjects1Objects = Hashtable.newFrom({"DeleteButton": gdjs.MainSceneCode.GDDeleteButtonObjects1});gdjs.MainSceneCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MainSceneCode.GDStartButtonObjects2);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
gdjs.MainSceneCode.condition2IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainSceneCode.mapOfGDgdjs_46MainSceneCode_46GDStartButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MainSceneCode.condition1IsTrue_0.val ) {
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition2IsTrue_0;
gdjs.MainSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9357468);
}
}}
}
if (gdjs.MainSceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DeleteButton"), gdjs.MainSceneCode.GDDeleteButtonObjects1);

gdjs.MainSceneCode.condition0IsTrue_0.val = false;
gdjs.MainSceneCode.condition1IsTrue_0.val = false;
gdjs.MainSceneCode.condition2IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MainSceneCode.condition0IsTrue_0.val ) {
{
gdjs.MainSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainSceneCode.mapOfGDgdjs_46MainSceneCode_46GDDeleteButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainSceneCode.condition1IsTrue_0.val ) {
{
{gdjs.MainSceneCode.conditionTrue_1 = gdjs.MainSceneCode.condition2IsTrue_0;
gdjs.MainSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9358356);
}
}}
}
if (gdjs.MainSceneCode.condition2IsTrue_0.val) {
{gdjs.evtTools.storage.clearJSONFile("game_data");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene", false);
}}

}


};gdjs.MainSceneCode.eventsList12 = function(runtimeScene) {

{



}


{


gdjs.MainSceneCode.eventsList9(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList10(runtimeScene);
}


{


gdjs.MainSceneCode.eventsList11(runtimeScene);
}


};

gdjs.MainSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainSceneCode.GDHudTextTitleObjects1.length = 0;
gdjs.MainSceneCode.GDHudTextTitleObjects2.length = 0;
gdjs.MainSceneCode.GDHudTextTitleObjects3.length = 0;
gdjs.MainSceneCode.GDHudTextTitleObjects4.length = 0;
gdjs.MainSceneCode.GDHudTextTitleObjects5.length = 0;
gdjs.MainSceneCode.GDHudTexDeleteObjects1.length = 0;
gdjs.MainSceneCode.GDHudTexDeleteObjects2.length = 0;
gdjs.MainSceneCode.GDHudTexDeleteObjects3.length = 0;
gdjs.MainSceneCode.GDHudTexDeleteObjects4.length = 0;
gdjs.MainSceneCode.GDHudTexDeleteObjects5.length = 0;
gdjs.MainSceneCode.GDHudTextStartObjects1.length = 0;
gdjs.MainSceneCode.GDHudTextStartObjects2.length = 0;
gdjs.MainSceneCode.GDHudTextStartObjects3.length = 0;
gdjs.MainSceneCode.GDHudTextStartObjects4.length = 0;
gdjs.MainSceneCode.GDHudTextStartObjects5.length = 0;
gdjs.MainSceneCode.GDCursorObjects1.length = 0;
gdjs.MainSceneCode.GDCursorObjects2.length = 0;
gdjs.MainSceneCode.GDCursorObjects3.length = 0;
gdjs.MainSceneCode.GDCursorObjects4.length = 0;
gdjs.MainSceneCode.GDCursorObjects5.length = 0;
gdjs.MainSceneCode.GDDeleteButtonObjects1.length = 0;
gdjs.MainSceneCode.GDDeleteButtonObjects2.length = 0;
gdjs.MainSceneCode.GDDeleteButtonObjects3.length = 0;
gdjs.MainSceneCode.GDDeleteButtonObjects4.length = 0;
gdjs.MainSceneCode.GDDeleteButtonObjects5.length = 0;
gdjs.MainSceneCode.GDStartButtonObjects1.length = 0;
gdjs.MainSceneCode.GDStartButtonObjects2.length = 0;
gdjs.MainSceneCode.GDStartButtonObjects3.length = 0;
gdjs.MainSceneCode.GDStartButtonObjects4.length = 0;
gdjs.MainSceneCode.GDStartButtonObjects5.length = 0;
gdjs.MainSceneCode.GDControlsObjects1.length = 0;
gdjs.MainSceneCode.GDControlsObjects2.length = 0;
gdjs.MainSceneCode.GDControlsObjects3.length = 0;
gdjs.MainSceneCode.GDControlsObjects4.length = 0;
gdjs.MainSceneCode.GDControlsObjects5.length = 0;

gdjs.MainSceneCode.eventsList12(runtimeScene);
return;

}

gdjs['MainSceneCode'] = gdjs.MainSceneCode;
