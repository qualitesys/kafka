console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java 23 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.ClientQuotasDelta"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.ClientQuotasDelta" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#33"
 , "c1" : "ClientQuotasDelta"
 , "c2" : "ClientQuotasDelta(ClientQuotasImage)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#37"
 , "c1" : "Map&lt;ClientQuotaEntity,ClientQuotaDelta&gt;"
 , "c2" : "changes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#41"
 , "c1" : "void"
 , "c2" : "finishSnapshot()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#51"
 , "c1" : "void"
 , "c2" : "handleMetadataVersionChange(MetadataVersion)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#55"
 , "c1" : "void"
 , "c2" : "replay(ClientQuotaRecord)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#63"
 , "c1" : "ClientQuotasImage"
 , "c2" : "apply()"
 , "c3" : "8"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#91"
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

 "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00041] For method finishSnapshot list of called methods Object monObjet|V changes_computeIfAbsentN161576"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00043] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00045] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method handleMetadataVersionChange arguments MetadataVersion  newVersion"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method replay arguments ClientQuotaRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00055] For method replay list of called methods Object monObjet|org.apache.kafka.common.quota.ClientQuotaEntity ClientQuotaImage_dataToEntityN161939|V changes_computeIfAbsentN162055"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00063] For method apply list of called methods Object monObjet|V changes_getN162860|org.apache.kafka.image.ClientQuotaImage change_applyN163161"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00067] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00068] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00072] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00081] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.image.ClientQuotasDelta.apply@POLYN162373 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.image.ClientQuotasDelta.toString@POLYN164061 the MagicNumber/String  'ClientQuotasDelta(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.image.ClientQuotasDelta.toString@POLYN164061 the MagicNumber/String  'changes=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.image.ClientQuotasDelta.toString@POLYN164061 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00037] Public method changes is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00091] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00051] Public method handleMetadataVersionChange is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.ClientQuotasDelta.apply@POLYN162373"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method org.apache.kafka.image.ClientQuotasDelta.apply@POLYN162373 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasDelta.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
