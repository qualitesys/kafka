console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java 8 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Transformation<R>"
 , "c2" : "org.apache.kafka.connect.transforms.RegexRouter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.RegexRouter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html#53"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html#60"
 , "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html#73"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html#77"
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
   {

 "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDI"
 , "c3" : "The class does not respect the SOLID principle Interface Segregation"
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
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
 , "c1" : "00044"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html#44"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00044] The interface ConfigName does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method apply arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.transforms.RegexRouter.apply@POLYN154663 the MagicNumber/String  'Rerouting from topic '{}' to new topic '{}'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.connect.transforms.RegexRouter.apply@POLYN154663 the MagicNumber/String  'Not rerouting topic '{}' as it does not match the configured regex' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00073] Valued method close is empty or contains only a return. Interface segregation for Transformation&lt;R&gt;"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00073] In the class RegexRouter which implements the interface(s) Transformation&lt;R&gt;, the method close is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedTransformation&lt;R&gt;"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/RegexRouter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
