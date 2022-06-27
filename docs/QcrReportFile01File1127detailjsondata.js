console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java 11 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ConnectClusterState"
 , "c2" : "org.apache.kafka.connect.runtime.health.ConnectClusterStateImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.health.ConnectClusterStateImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConnectClusterStateImpl"
 , "c2" : "ConnectClusterStateImpl(long;ConnectClusterDetails;Herder)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Collection<String>"
 , "c2" : "connectors()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorHealth"
 , "c2" : "connectorHealth(String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,String>"
 , "c2" : "connectorConfig(String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ConnectClusterDetails"
 , "c2" : "clusterDetails()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Integer,TaskState>"
 , "c2" : "taskStates(List<ConnectorStateInfo.TaskState>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class ConnectClusterStateImpl contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.connect.runtime.health.ConnectClusterStateImpl.connectors@POLYN172115 the MagicNumber/String  'Failed to retrieve list of connectors' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method connectorHealth arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00052] For method connectorHealth list of called methods Object monObjet|org.apache.kafka.connect.runtime.rest.entities.ConnectorStateInfo herder_connectorStatusN172765"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method connectorConfig arguments String  connName"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.connect.runtime.health.ConnectClusterStateImpl.connectorConfig@POLYN173504 the MagicNumber/String  'Failed to retrieve configuration for connector '%s'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method taskStates arguments List&lt;ConnectorStateInfo.TaskState &gt;  states"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.health.ConnectClusterStateImpl.connectorConfig@POLYN173504"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.health.ConnectClusterStateImpl.connectors@POLYN172115"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.connect.runtime.health.ConnectClusterStateImpl.connectorConfig@POLYN173504 the MagicNumber/String 'Failed to retrieve configuration for connector '%s'' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00047] In the recursive method org.apache.kafka.connect.runtime.health.ConnectClusterStateImpl.connectors@POLYN172115 the MagicNumber/String 'Failed to retrieve list of connectors' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
