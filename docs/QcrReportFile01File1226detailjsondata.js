console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java 7 rule violations " 
 , "fic2"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Transformation<R>"
 , "c2" : "org.apache.kafka.connect.transforms.TimestampRouter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.TimestampRouter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.html#43"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.html#57"
 , "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.html#75"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.html#80"
 , "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.png" 

 , "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
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
 , "c1" : "00016"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class TimestampRouter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.connect.transforms.TimestampRouter.configure@POLYN154140 the MagicNumber/String  'UTC' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method apply arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.transforms.TimestampRouter.apply@POLYN154940 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.connect.transforms.TimestampRouter.apply@POLYN154940 the MagicNumber/String  'Timestamp missing on record: ' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/TimestampRouter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
