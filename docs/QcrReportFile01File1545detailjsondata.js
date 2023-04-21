console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html" 
 , "texte" : "File storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java 1 rule violations " 
 , "fic2"  : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.server.log.remote.storage.RemoteLogMetadata"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.storage.RemoteLogMetadata" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html#39"
 , "c1" : "RemoteLogMetadata"
 , "c2" : "RemoteLogMetadata(int;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html#47"
 , "c1" : "long"
 , "c2" : "eventTimestampMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html#54"
 , "c1" : "int"
 , "c2" : "brokerId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html#61"
 , "c1" : "TopicIdPartition"
 , "c2" : "topicIdPartition()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.png" 

 , "ligneplantuml" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00061] Public method topicIdPartition is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
