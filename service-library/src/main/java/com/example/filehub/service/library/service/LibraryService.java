package com.example.filehub.service.library.service;

import com.example.filehub.commons.entity.File;
import com.example.filehub.commons.entity.Library;

import java.time.LocalDateTime;
import java.util.List;

public interface LibraryService {
    Library findLibraryById(Long libraryId);

    Library findLibraryByName(String libraryName);

    List<Library> findTopLibraries(Integer minFollowersCount);

    List<Library> findNewLibraries(LocalDateTime now);

    List<Library> findNewlyUpdatedLibraries(LocalDateTime now);

    List<Library> findAllHotLibrariesByUser(Long uid, boolean includePrivate);

    List<Library> findAllNewLibrariesByUser(Long uid, boolean includePrivate);

    List<Library> findAllLibrariesByUser(Long uid, boolean includePrivate);

    Library createLibrary(Library library, Long creatorUid);
}
