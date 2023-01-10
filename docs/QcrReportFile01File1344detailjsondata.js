console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java 11 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.ProducerIdsImage"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.ProducerIdsImage" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#39"
 , "c1" : "ProducerIdsImage"
 , "c2" : "ProducerIdsImage(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#43"
 , "c1" : "long"
 , "c2" : "highestSeenProducerId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#47"
 , "c1" : "void"
 , "c2" : "write(Consumer<List<ApiMessageAndVersion>>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#58"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#65"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#70"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#74"
 , "c1" : "boolean"
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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
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
 , "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method write arguments Consumer&lt;List&lt;ApiMessageAndVersion &gt; &gt;  out"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument out is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.image.ProducerIdsImage.write@POLYN148721 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.image.ProducerIdsImage.write@POLYN148721 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.image.ProducerIdsImage.write@POLYN148721 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.image.ProducerIdsImage.write@POLYN148721 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.image.ProducerIdsImage.equals@POLYN149273 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.image.ProducerIdsImage.toString@POLYN149754 the MagicNumber/String  'ProducerIdsImage(highestSeenProducerId=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.image.ProducerIdsImage.toString@POLYN149754 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.image.ProducerIdsImage.isEmpty@POLYN149888 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/image/ProducerIdsImage.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
