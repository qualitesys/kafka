console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/TopicsImage.java 19 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.TopicsImage"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.TopicsImage" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TopicsImage"
 , "c2" : "TopicsImage(Map<Uuid,TopicImage>;Map<String,TopicImage>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Uuid,TopicImage>"
 , "c2" : "topicsById()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,TopicImage>"
 , "c2" : "topicsByName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "PartitionRegistration"
 , "c2" : "getPartition(Uuid;int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "TopicImage"
 , "c2" : "getTopic(Uuid)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopicImage"
 , "c2" : "getTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "write(Consumer<List<ApiMessageAndVersion>>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Uuid>"
 , "c2" : "topicNameToIdView()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Uuid,String>"
 , "c2" : "topicIdToNameView()"
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
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.svg" }

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
 , "c4" : "1"
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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class TopicsImage contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method getPartition arguments Uuid  id|int  partitionId"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.image.TopicsImage.getPartition@POLYN177035 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.image.TopicsImage.getPartition@POLYN177035 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method getTopic arguments Uuid  id"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method getTopic arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method write arguments Consumer&lt;List&lt;ApiMessageAndVersion &gt; &gt;  out"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.image.TopicsImage.equals@POLYN177995 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.image.TopicsImage.toString@POLYN179267 the MagicNumber/String  'TopicsImage(topicsById=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.image.TopicsImage.toString@POLYN179267 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.image.TopicsImage.toString@POLYN179267 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.image.TopicsImage.toString@POLYN179267 the MagicNumber/String  ', topicsByName=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.image.TopicsImage.toString@POLYN179267 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.image.TopicsImage.toString@POLYN179267 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.image.TopicsImage.toString@POLYN179267 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.TopicsImage.getPartition@POLYN177035"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#46"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00046] In the recursive method org.apache.kafka.image.TopicsImage.getPartition@POLYN177035 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsImage.java.html#46"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00046] In the recursive method org.apache.kafka.image.TopicsImage.getPartition@POLYN177035 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
