console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/TopicImage.java 11 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.TopicImage"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.TopicImage" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#48"
 , "c1" : "TopicImage"
 , "c2" : "TopicImage(String;Uuid;Map&lt;Integer,PartitionRegistration&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#56"
 , "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#60"
 , "c1" : "Uuid"
 , "c2" : "id()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#64"
 , "c1" : "Map&lt;Integer,PartitionRegistration&gt;"
 , "c2" : "partitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#68"
 , "c1" : "void"
 , "c2" : "write(Consumer&lt;List&lt;ApiMessageAndVersion&gt;&gt;)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#82"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#91"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#96"
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

 "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method write arguments Consumer&lt;List&lt;ApiMessageAndVersion &gt; &gt;  out"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#68"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00068] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.image.TopicImage.equals@POLYN164140 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.image.TopicImage.toString@POLYN164822 the MagicNumber/String  'TopicImage(name=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.image.TopicImage.toString@POLYN164822 the MagicNumber/String  ', id=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.image.TopicImage.toString@POLYN164822 the MagicNumber/String  ', partitions=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.image.TopicImage.toString@POLYN164822 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.image.TopicImage.toString@POLYN164822 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.image.TopicImage.toString@POLYN164822 the MagicNumber/String  ')' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicImage.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
