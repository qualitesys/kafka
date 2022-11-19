console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java 7 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ReplicaSelector"
 , "c2" : "org.apache.kafka.common.replica.RackAwareReplicaSelector"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.replica.RackAwareReplicaSelector" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00014"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.html#14"
 , "c1" : "Optional<ReplicaView>"
 , "c2" : "select(TopicPartition;ClientMetadata;PartitionView)"
 , "c3" : "7"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
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
 , "c1" : "00011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class RackAwareReplicaSelector contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.html#14"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00014] For method select arguments TopicPartition  topicPartition|ClientMetadata  clientMetadata|PartitionView  partitionView"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.html#14"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00014] For method select list of called methods Object monObjet|java.util.Set&lt;org.apache.kafka.common.replica.ReplicaView&gt; partitionView_replicasN146709"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.html#15"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00015] The argument clientMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.html#16"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00016] The argument partitionView is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00017] The same method call clientMetadata.rackId() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.common.replica.RackAwareReplicaSelector.select@POLYN146377 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/replica/RackAwareReplicaSelector.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
