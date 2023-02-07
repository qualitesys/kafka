console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java 6 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ConnectClusterState"
 , "c2" : "org.apache.kafka.connect.runtime.health.ConnectClusterStateImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.health.ConnectClusterStateImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#45"
 , "c1" : "ConnectClusterStateImpl"
 , "c2" : "ConnectClusterStateImpl(long;ConnectClusterDetails;Herder)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#56"
 , "c1" : "Collection&lt;String&gt;"
 , "c2" : "connectors()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#67"
 , "c1" : "ConnectorHealth"
 , "c2" : "connectorHealth(String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#84"
 , "c1" : "Map&lt;String,String&gt;"
 , "c2" : "connectorConfig(String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#98"
 , "c1" : "ConnectClusterDetails"
 , "c2" : "clusterDetails()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#102"
 , "c1" : "Map&lt;Integer,TaskState&gt;"
 , "c2" : "taskStates(List&lt;ConnectorStateInfo.TaskState&gt;)"
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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.connect.runtime.health.ConnectClusterStateImpl.connectors@POLYN157421 the MagicNumber/String  'Failed to retrieve list of connectors' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method connectorHealth arguments String  connName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00067] For method connectorHealth list of called methods Object monObjet|org.apache.kafka.connect.runtime.rest.entities.ConnectorStateInfo herder_connectorStatusN158071"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method connectorConfig arguments String  connName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.connect.runtime.health.ConnectClusterStateImpl.connectorConfig@POLYN158810 the MagicNumber/String  'Failed to retrieve configuration for connector '%s'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method taskStates arguments List&lt;ConnectorStateInfo.TaskState &gt;  states"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/health/ConnectClusterStateImpl.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
