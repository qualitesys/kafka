console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.html" 
 , "texte" : "File connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java 5 rule violations " 
 , "fic2"  : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.mirror.RemoteClusterUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.RemoteClusterUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.html#45"
 , "c1" : "RemoteClusterUtils"
 , "c2" : "RemoteClusterUtils()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.html#49"
 , "c1" : "int"
 , "c2" : "replicationHops(Map<String,Object>;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.html#57"
 , "c1" : "Set<String>"
 , "c2" : "heartbeatTopics(Map<String,Object>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.html#65"
 , "c1" : "Set<String>"
 , "c2" : "checkpointTopics(Map<String,Object>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.html#73"
 , "c1" : "Set<String>"
 , "c2" : "upstreamClusters(Map<String,Object>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.html#87"
 , "c1" : "Map<TopicPartition,OffsetAndMetadata>"
 , "c2" : "translateOffsets(Map<String,Object>;String;String;Duration)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.png" 

 , "ligneplantuml" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.svg" }

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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method replicationHops arguments Map&lt;String ,Object &gt;  properties|String  upstreamClusterAlias"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method heartbeatTopics arguments Map&lt;String ,Object &gt;  properties"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method checkpointTopics arguments Map&lt;String ,Object &gt;  properties"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method upstreamClusters arguments Map&lt;String ,Object &gt;  properties"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method translateOffsets arguments Map&lt;String ,Object &gt;  properties|String  remoteClusterAlias|String  consumerGroupId|Duration  timeout"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/RemoteClusterUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
