console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java 13 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.TopicPartitionMetadata"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.TopicPartitionMetadata" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "TopicPartitionMetadata"
 , "c2" : "TopicPartitionMetadata(long;ProcessorMetadata)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "partitionTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ProcessorMetadata"
 , "c2" : "processorMetadata()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "encode()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "TopicPartitionMetadata"
 , "c2" : "decode(String)"
 , "c3" : "5"
 , "c4" : "15"
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
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
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
 , "c4" : "7"
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
   "c1" : "00011"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class TopicPartitionMetadata contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method decode arguments String  encryptedString"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument encryptedString is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00067] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.processor.internals.TopicPartitionMetadata.decode@POLYN174917 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.processor.internals.TopicPartitionMetadata.decode@POLYN174917 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.processor.internals.TopicPartitionMetadata.decode@POLYN174917 the MagicNumber/String  'Unsupported offset metadata version found. Supported version &amp;lt;= {}. Found version {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.processor.internals.TopicPartitionMetadata.decode@POLYN174917 the MagicNumber/String  'Unsupported offset metadata found' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method equals arguments Object  obj"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.streams.processor.internals.TopicPartitionMetadata.equals@POLYN176773 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.streams.processor.internals.TopicPartitionMetadata.equals@POLYN176773 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.processor.internals.TopicPartitionMetadata.equals@POLYN176773 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/TopicPartitionMetadata.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00045] Public method decode is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
