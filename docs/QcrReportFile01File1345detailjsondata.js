console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/TopicDelta.java 33 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.TopicDelta"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.TopicDelta" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#40"
 , "c1" : "TopicDelta"
 , "c2" : "TopicDelta(TopicImage)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#44"
 , "c1" : "TopicImage"
 , "c2" : "image()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#48"
 , "c1" : "Map&lt;Integer,PartitionRegistration&gt;"
 , "c2" : "partitionChanges()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#52"
 , "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#56"
 , "c1" : "Uuid"
 , "c2" : "id()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#60"
 , "c1" : "void"
 , "c2" : "replay(PartitionRecord)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#64"
 , "c1" : "void"
 , "c2" : "replay(PartitionChangeRecord)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#76"
 , "c1" : "TopicImage"
 , "c2" : "apply()"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00106"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#106"
 , "c1" : "LocalReplicaChanges"
 , "c2" : "localChanges(int)"
 , "c3" : "10"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00143"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#143"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method replay arguments PartitionRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method replay arguments PartitionChangeRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00064] For method replay list of called methods Object monObjet|V partitionChanges_getN174902"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#64"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00064] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.image.TopicDelta.replay@POLYN174807 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.image.TopicDelta.replay@POLYN174807 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.image.TopicDelta.replay@POLYN174807 the MagicNumber/String  'Unable to find partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.image.TopicDelta.replay@POLYN174807 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00076] For method apply list of called methods Object monObjet|V partitionChanges_getN176040"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00080] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.image.TopicDelta.apply@POLYN175612 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method localChanges arguments int  brokerId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00113] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00118] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00126] The same method call Replicas.contains(entry.getValue().replicas,brokerId) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.image.TopicDelta.localChanges@POLYN177242 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.image.TopicDelta.localChanges@POLYN177242 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.image.TopicDelta.localChanges@POLYN177242 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.image.TopicDelta.toString@POLYN180052 the MagicNumber/String  'TopicDelta(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.image.TopicDelta.toString@POLYN180052 the MagicNumber/String  'partitionChanges=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.image.TopicDelta.toString@POLYN180052 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00048] Public method partitionChanges is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#143"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00143] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00060] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.TopicDelta.id@POLYN174495"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.TopicDelta.name@POLYN174389"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.TopicDelta.replay@POLYN174807"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00066] In the recursive method org.apache.kafka.image.TopicDelta.replay@POLYN174807 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method org.apache.kafka.image.TopicDelta.replay@POLYN174807 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method org.apache.kafka.image.TopicDelta.replay@POLYN174807 the MagicNumber/String 'Unable to find partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.image.TopicDelta.replay@POLYN174807 the MagicNumber/String ':' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
