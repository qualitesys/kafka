console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java 11 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.runtime.RestartPlan"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.RestartPlan" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RestartPlan"
 , "c2" : "RestartPlan(RestartRequest;ConnectorStateInfo)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "connectorName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "RestartRequest"
 , "c2" : "restartRequest()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorStateInfo"
 , "c2" : "restartConnectorStateInfo()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<ConnectorTaskId>"
 , "c2" : "taskIdsToRestart()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "shouldRestartConnector()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "shouldRestartTasks()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "restartTaskCount()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "totalTaskCount()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isRestarting(ConnectorStateInfo.AbstractState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isRestarting(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class RestartPlan contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.html#22"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00022] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.connect.runtime.RestartPlan.RestartPlan@POLYN178177 the MagicNumber/String  'RestartRequest name may not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.connect.runtime.RestartPlan.RestartPlan@POLYN178177 the MagicNumber/String  'ConnectorStateInfo name may not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method isRestarting arguments ConnectorStateInfo.AbstractState  state"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method isRestarting arguments String  state"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.connect.runtime.RestartPlan.toString@POLYN181447 the MagicNumber/String  'plan to restart connector and %d of %d tasks for %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.connect.runtime.RestartPlan.toString@POLYN181447 the MagicNumber/String  'plan to restart %d of %d tasks for %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00061] Public method shouldRestartTasks is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/RestartPlan.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00066] Public method restartTaskCount is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
