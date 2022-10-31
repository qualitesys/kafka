console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html" 
 , "texte" : "File connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java 6 rule violations " 
 , "fic2"  : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.mirror.SourceAndTarget"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.SourceAndTarget" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00009"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#9"
 , "c1" : "SourceAndTarget"
 , "c2" : "SourceAndTarget(String;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00014"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#14"
 , "c1" : "String"
 , "c2" : "source()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#18"
 , "c1" : "String"
 , "c2" : "target()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#23"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#28"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#33"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.png" 

 , "ligneplantuml" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00005"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#5"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00005] The class SourceAndTarget contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.connect.mirror.SourceAndTarget.toString@POLYN143285 the MagicNumber/String  '-&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method equals arguments Object  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.connect.mirror.SourceAndTarget.equals@POLYN143563 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#28"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00028] Public method hashCode is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/connect/mirror-client/src/main/java/org/apache/kafka/connect/mirror/SourceAndTarget.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00033] Public method equals is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
