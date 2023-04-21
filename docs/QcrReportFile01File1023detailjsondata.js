console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html" 
 , "texte" : "File connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java 10 rule violations " 
 , "fic2"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "GroupFilter"
 , "c2" : "org.apache.kafka.connect.mirror.DefaultGroupFilter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.DefaultGroupFilter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#45"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#52"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#55"
 , "c1" : "boolean"
 , "c2" : "included(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#59"
 , "c1" : "boolean"
 , "c2" : "excluded(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#64"
 , "c1" : "boolean"
 , "c2" : "shouldReplicateGroup(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.png" 

 , "ligneplantuml" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00045] For method configure list of called methods Object monObjet|java.util.regex.Pattern config_includePatternN152905|java.util.regex.Pattern config_excludePatternN152979"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method included arguments String  group"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.mirror.DefaultGroupFilter.included@POLYN153087 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method excluded arguments String  group"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.connect.mirror.DefaultGroupFilter.excluded@POLYN153300 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method shouldReplicateGroup arguments String  group"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.connect.mirror.DefaultGroupFilter.GroupFilterConfig.GroupFilterConfig@POLYN154325 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00052] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00052] Void method close is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
