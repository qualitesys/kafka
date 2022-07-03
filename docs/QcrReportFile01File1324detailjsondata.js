console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/AclsDelta.java 22 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.AclsDelta"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.AclsDelta" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AclsDelta"
 , "c2" : "AclsDelta(AclsImage)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Uuid,Optional<StandardAcl>>"
 , "c2" : "changes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "finishSnapshot()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleMetadataVersionChange(MetadataVersion)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isSnapshotDelta()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "replay(AccessControlEntryRecord)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "replay(RemoveAccessControlEntryRecord)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "AclsImage"
 , "c2" : "apply()"
 , "c3" : "9"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class AclsDelta contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.image.AclsDelta.finishSnapshot@POLYN181375 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method handleMetadataVersionChange arguments MetadataVersion  newVersion"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method replay arguments AccessControlEntryRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00047] For method replay list of called methods Object monObjet|org.apache.kafka.metadata.authorizer.StandardAclWithId StandardAclWithId_fromRecordN181724"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method replay arguments RemoveAccessControlEntryRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.image.AclsDelta.replay@POLYN182280 the MagicNumber/String  'Failed to find existing ACL with ID ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.image.AclsDelta.replay@POLYN182280 the MagicNumber/String  ' in either image or changes' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00067] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.image.AclsDelta.apply@POLYN182972 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.image.AclsDelta.toString@POLYN184512 the MagicNumber/String  'AclsDelta(isSnapshotDelta=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.image.AclsDelta.toString@POLYN184512 the MagicNumber/String  ', changes=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.image.AclsDelta.toString@POLYN184512 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.image.AclsDelta.toString@POLYN184512 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.image.AclsDelta.toString@POLYN184512 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.image.AclsDelta.toString@POLYN184512 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00031] Public method changes is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00043] Public method isSnapshotDelta is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00086] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00039] Public method handleMetadataVersionChange is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/AclsDelta.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00047] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
