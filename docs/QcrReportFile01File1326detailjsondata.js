console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/AclsDelta.java 22 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.AclsDelta"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.AclsDelta" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#43"
 , "c1" : "AclsDelta"
 , "c2" : "AclsDelta(AclsImage)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#53"
 , "c1" : "Map&lt;Uuid,Optional&lt;StandardAcl&gt;&gt;"
 , "c2" : "changes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#57"
 , "c1" : "void"
 , "c2" : "finishSnapshot()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#61"
 , "c1" : "void"
 , "c2" : "handleMetadataVersionChange(MetadataVersion)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#65"
 , "c1" : "boolean"
 , "c2" : "isSnapshotDelta()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#69"
 , "c1" : "void"
 , "c2" : "replay(AccessControlEntryRecord)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#82"
 , "c1" : "void"
 , "c2" : "replay(RemoveAccessControlEntryRecord)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#92"
 , "c1" : "AclsImage"
 , "c2" : "apply()"
 , "c3" : "9"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00115"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#115"
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

 "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "5"
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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
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
 , "c1" : "00058"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.image.AclsDelta.finishSnapshot@POLYN172173 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method handleMetadataVersionChange arguments MetadataVersion  newVersion"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method replay arguments AccessControlEntryRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00069] For method replay list of called methods Object monObjet|org.apache.kafka.metadata.authorizer.StandardAclWithId StandardAclWithId_fromRecordN172524"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method replay arguments RemoveAccessControlEntryRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#82"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00082] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.image.AclsDelta.replay@POLYN173080 the MagicNumber/String  'Failed to find existing ACL with ID ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.image.AclsDelta.replay@POLYN173080 the MagicNumber/String  ' in either image or changes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00096] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.image.AclsDelta.apply@POLYN173772 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.image.AclsDelta.toString@POLYN175316 the MagicNumber/String  'AclsDelta(isSnapshotDelta=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.image.AclsDelta.toString@POLYN175316 the MagicNumber/String  ', changes=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.image.AclsDelta.toString@POLYN175316 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.image.AclsDelta.toString@POLYN175316 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.image.AclsDelta.toString@POLYN175316 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.image.AclsDelta.toString@POLYN175316 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00053] Public method changes is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00065] Public method isSnapshotDelta is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00115] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00061] Public method handleMetadataVersionChange is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00069] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00061] Valued method handleMetadataVersionChange is empty or contains only a return."
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
