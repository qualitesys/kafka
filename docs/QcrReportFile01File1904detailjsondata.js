console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java 9 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.QuickUnion"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.QuickUnion" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00011"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#11"
 , "c1" : "void"
 , "c2" : "add(T)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#15"
 , "c1" : "boolean"
 , "c2" : "exists(T)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#20"
 , "c1" : "T"
 , "c2" : "root(T)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#40"
 , "c1" : "void"
 , "c2" : "unite(T;T...)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#46"
 , "c1" : "void"
 , "c2" : "unitePair(T;T)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#11"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00011] For method add arguments T  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method exists arguments T  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00020] For method root arguments T  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#20"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00020] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00030] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.streams.processor.internals.QuickUnion.root@POLYN147102 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.streams.processor.internals.QuickUnion.root@POLYN147102 the MagicNumber/String  'id: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method unite arguments T  id1|T  ...idList"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method unitePair arguments T  id1|T  id2"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/QuickUnion.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
