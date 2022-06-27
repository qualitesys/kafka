console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java 12 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.ProducerIdsImage"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.ProducerIdsImage" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ProducerIdsImage"
 , "c2" : "ProducerIdsImage(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "highestSeenProducerId()"
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
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
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
 , "c4" : "8"
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
   "c1" : "00015"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class ProducerIdsImage contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method write arguments Consumer&lt;List&lt;ApiMessageAndVersion &gt; &gt;  out"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.image.ProducerIdsImage.write@POLYN163391 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.image.ProducerIdsImage.write@POLYN163391 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.image.ProducerIdsImage.write@POLYN163391 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.image.ProducerIdsImage.write@POLYN163391 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.image.ProducerIdsImage.equals@POLYN163943 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.image.ProducerIdsImage.toString@POLYN164424 the MagicNumber/String  'ProducerIdsImage(highestSeenProducerId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.image.ProducerIdsImage.toString@POLYN164424 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.image.ProducerIdsImage.isEmpty@POLYN164558 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
