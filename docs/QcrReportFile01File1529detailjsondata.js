console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html" 
 , "texte" : "File storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java 2 rule violations " 
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
 , "c5" : "00017"
 , "c5link" : "././qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html#17"
 , "c1" : "RemoteLogMetadata"
 , "c2" : "RemoteLogMetadata(int;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html#23"
 , "c1" : "long"
 , "c2" : "eventTimestampMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html#28"
 , "c1" : "int"
 , "c2" : "brokerId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html#33"
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
"data11" : [
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
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class RemoteLogMetadata contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00033] Public method topicIdPartition is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/storage/api/src/main/java/org/apache/kafka/server/log/remote/storage/RemoteLogMetadata.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
