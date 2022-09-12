console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java 10 rule violations " 
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
 , "c5" : "00042"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#42"
 , "c1" : "FeatureUpdate"
 , "c2" : "FeatureUpdate(short;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#47"
 , "c1" : "FeatureUpdate"
 , "c2" : "FeatureUpdate(short;UpgradeType)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#60"
 , "c1" : "short"
 , "c2" : "maxVersionLevel()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#65"
 , "c1" : "boolean"
 , "c2" : "allowDowngrade()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#69"
 , "c1" : "UpgradeType"
 , "c2" : "upgradeType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#74"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#88"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00093"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#93"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
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
 , "c1" : "00007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#7"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00007] The class FeatureUpdate contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument upgradeType is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.clients.admin.FeatureUpdate.FeatureUpdate@POLYN157073 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.clients.admin.FeatureUpdate.FeatureUpdate@POLYN157073 the MagicNumber/String  'The downgradeType flag should be set to SAFE or UNSAFE when the provided maxVersionLevel:%d is &amp;lt; 1.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.clients.admin.FeatureUpdate.FeatureUpdate@POLYN157073 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.clients.admin.FeatureUpdate.FeatureUpdate@POLYN157073 the MagicNumber/String  'Cannot specify a negative version level.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method equals arguments Object  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.admin.FeatureUpdate.equals@POLYN158047 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.clients.admin.FeatureUpdate.equals@POLYN158047 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/FeatureUpdate.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.clients.admin.FeatureUpdate.toString@POLYN158769 the MagicNumber/String  'FeatureUpdate{maxVersionLevel:%d, downgradeType:%s}' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
