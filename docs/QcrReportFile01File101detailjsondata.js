console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java 9 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.FeatureUpdate"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.FeatureUpdate" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#68"
 , "c1" : "FeatureUpdate"
 , "c2" : "FeatureUpdate(short;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#82"
 , "c1" : "FeatureUpdate"
 , "c2" : "FeatureUpdate(short;UpgradeType)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#95"
 , "c1" : "short"
 , "c2" : "maxVersionLevel()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00100"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#100"
 , "c1" : "boolean"
 , "c2" : "allowDowngrade()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#104"
 , "c1" : "UpgradeType"
 , "c2" : "upgradeType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#109"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00123"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#123"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00128"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#128"
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
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.svg" }

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
 , "c4" : "7"
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
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#82"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00082] The argument upgradeType is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.clients.admin.FeatureUpdate.FeatureUpdate@POLYN158563 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.clients.admin.FeatureUpdate.FeatureUpdate@POLYN158563 the MagicNumber/String  'The downgradeType flag should be set to SAFE or UNSAFE when the provided maxVersionLevel:%d is &amp;lt; 1.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.clients.admin.FeatureUpdate.FeatureUpdate@POLYN158563 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.admin.FeatureUpdate.FeatureUpdate@POLYN158563 the MagicNumber/String  'Cannot specify a negative version level.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method equals arguments Object  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.clients.admin.FeatureUpdate.equals@POLYN159537 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.admin.FeatureUpdate.equals@POLYN159537 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.clients.admin.FeatureUpdate.toString@POLYN160259 the MagicNumber/String  'FeatureUpdate{maxVersionLevel:%d, downgradeType:%s}' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
