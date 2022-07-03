console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/TopicDelta.java 31 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.TopicDelta"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.TopicDelta" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TopicDelta"
 , "c2" : "TopicDelta(TopicImage)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopicImage"
 , "c2" : "image()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Integer,PartitionRegistration>"
 , "c2" : "partitionChanges()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Uuid"
 , "c2" : "id()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "replay(PartitionRecord)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "replay(PartitionChangeRecord)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "TopicImage"
 , "c2" : "apply()"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "LocalReplicaChanges"
 , "c2" : "localChanges(int)"
 , "c3" : "10"
 , "c4" : "10"
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
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "3"
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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
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
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class TopicDelta contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method replay arguments PartitionRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method replay arguments PartitionChangeRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.image.TopicDelta.replay@POLYN186069 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.image.TopicDelta.replay@POLYN186069 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.image.TopicDelta.replay@POLYN186069 the MagicNumber/String  'Unable to find partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.image.TopicDelta.replay@POLYN186069 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.image.TopicDelta.apply@POLYN186872 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method localChanges arguments int  brokerId"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00099] The same method call Replicas.contains(entry.getValue().replicas,brokerId) is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.image.TopicDelta.localChanges@POLYN188496 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.image.TopicDelta.localChanges@POLYN188496 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.image.TopicDelta.localChanges@POLYN188496 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.image.TopicDelta.toString@POLYN191294 the MagicNumber/String  'TopicDelta(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.image.TopicDelta.toString@POLYN191294 the MagicNumber/String  'partitionChanges=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.image.TopicDelta.toString@POLYN191294 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00031] Public method partitionChanges is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00116] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00043] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.TopicDelta.id@POLYN185757"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.TopicDelta.localChanges@POLYN188496"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.TopicDelta.name@POLYN185651"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.image.TopicDelta.localChanges@POLYN188496 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method org.apache.kafka.image.TopicDelta.localChanges@POLYN188496 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicDelta.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00103] In the recursive method org.apache.kafka.image.TopicDelta.localChanges@POLYN188496 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
