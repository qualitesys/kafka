console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java 6 rule violations " 
 , "fic2"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Transformation<R>"
 , "c2" : "org.apache.kafka.connect.transforms.DropHeaders"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.DropHeaders" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.html#34"
 , "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.html#46"
 , "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.html#51"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.html#55"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.png" 

 , "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.svg" }

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
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class DropHeaders contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method apply arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.html#34"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00034] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00051] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00051] Void method close is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/DropHeaders.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
