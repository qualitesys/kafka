console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java 10 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Predicate<R>"
 , "c2" : "org.apache.kafka.connect.transforms.predicates.HasHeaderKey"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.predicates.HasHeaderKey" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#42"
 , "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#47"
 , "c1" : "boolean"
 , "c2" : "test(R)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#53"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#58"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#63"
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

 "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
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
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method test arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.transforms.predicates.HasHeaderKey.test@POLYN158040 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method configure arguments Map&lt;String,?&gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.transforms.predicates.HasHeaderKey.toString@POLYN158703 the MagicNumber/String  'HasHeaderKey{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.connect.transforms.predicates.HasHeaderKey.toString@POLYN158703 the MagicNumber/String  'name='' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.connect.transforms.predicates.HasHeaderKey.toString@POLYN158703 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.connect.transforms.predicates.HasHeaderKey.toString@POLYN158703 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00053] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00053] Void method close is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/HasHeaderKey.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
